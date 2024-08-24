import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Bar } from "react-chartjs-2";
import { useLocation, useNavigate } from "react-router-dom";
import { Chart as ChartJS, Title, Legend, Tooltip } from "chart.js";
import Loading from "../loading/loading";
ChartJS.register(Title, Legend, Tooltip);

function Filter_employee() {
    const [backendData, setBackendData] = useState([]);
    const [flag, setFlag] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    var isLatePunch = "";
    setTimeout(()=>{
        setBackendData(location.state.data);
        isLatePunch = location.state.label === "Late Punch";
        setFlag(true);
    },[20]);
 
   

    const data = {
        labels: ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9"],
        datasets: [
            {
                label: "Level Wise Late Punch",
                data: [100, 200, 300, 400, 20, 30, 300, 400, 100]
            }
        ]
    };

    const options = {
        plugins: {
            legend: { display: true },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    },
                },
            },
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const element = elements[0];
                const datasetIndex = element.datasetIndex;
                const index = element.index;
                const label = data.labels[index];
                const value = data.datasets[datasetIndex].data[index];
                navigate("/working-date-late-punch", { state: { data: { label, value } } });
            }
        }
    };
 
    const exportTableToPDF = () => {
        const doc = new jsPDF();
    
        // Add the title
        doc.text('Total Employee', 14, 20); // 14 is the x-coordinate, 20 is the y-coordinate
    
        const table = document.getElementById('tableToExport');
    
        // Collect table headers
        const headers = [];
        const headerCells = table.querySelectorAll('thead th');
        headerCells.forEach(cell => {
          headers.push(cell.innerText);
        });
    
        // Collect table data
        const data = [];
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
          const rowData = [];
          row.querySelectorAll('td').forEach(cell => {
            rowData.push(cell.innerText);
          });
          data.push(rowData);
        });
    
        // Add the table to the PDF
        doc.autoTable({
          head: [headers],
          body: data,
          startY: 30, // Adjust startY to position the table below the title
        });
    
        // Save the PDF
        doc.save('total_employee.pdf');
      };

    return (

        <div id='filter_emp_container'>
            {
                flag ? <>
                    <header>
                        <h1>{location.state.label}</h1>
                       <button onClick={()=>exportTableToPDF()}>Export PDF</button>
                    </header>
                    <main>
                        {isLatePunch && (
                            <section id='each_cluster_graph_box'>
                                <div id='age_wise_graph'>
                                    <Bar
                                        data={{
                                            labels: ["21-30", "31-40", "41-50", "51-60"],
                                            datasets: [
                                                {
                                                    label: "Total Late Punch",
                                                    data: [100, 200, 300, 400],
                                                    backgroundColor: "grey"
                                                },
                                                {
                                                    label: "Beyond 10:00",
                                                    data: [10, 180, 30, 100],
                                                    backgroundColor: "green"
                                                },
                                                {
                                                    label: "Beyond 10:15",
                                                    data: [90, 300, 70, 150],
                                                    backgroundColor: "red"
                                                }
                                            ]
                                        }}
                                        options={{ plugins: { title: { text: "Age Wise Late Punch" } } }}
                                    />
                                </div>
                                <div id='level_chart_filter'>
                                    <Bar data={data} options={options} />
                                </div>
                            </section>
                        )}
                        <table border="collapse" id='tableToExport'>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>CPF_ID</th>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Designation</th>
                                  
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {backendData.map((employee, index) => (
                                    <tr key={employee.employee_id || index}>
                                        <td>{index + 1}</td>
                                        <td>{employee.employee_id}</td>
                                        <td>{`${employee.first_name} ${employee.middle_name || ''} ${employee.last_name || ''}`}</td>
                                        <td>{employee.department_name}</td>
                                        <td>{employee.employee_designation_type_name}</td>
                                       
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>
                </> : <Loading />
            }

        </div>
    );
}

export default Filter_employee;
