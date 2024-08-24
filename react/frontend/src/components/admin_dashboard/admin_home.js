import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, defaults, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import Summery_table from '../filter_data/summery_table';
import Loading from '../loading/loading';
function Admin_home() {
    const [backendData, setBackendData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [totalemp,setTotalemp]=useState("");
    const [apidata, setApiData] = useState([
        {
            label: "Present",
            value: 100
        },
        {
            label: "Absent",
            value: 200
        },
        {
            label: "Late Punch",
            value: 300
        }
    ]);

    defaults.plugins.title.display = true;
    defaults.plugins.title.align = "center";
    defaults.plugins.title.font.size = 20;
    defaults.plugins.title.color = "black";


    ChartJS.register(
        BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend
    );



    const navigate = useNavigate();
    const date = new Date();
    const curr_date = date.toLocaleDateString();
    const data = {
        labels: ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9"],
        datasets: [
            {
                label: "Level Wise Late Punch",
                data: [100, 200, 300, 400, 20, 30, 300, 400, 100]
            }
        ]
    }

    const options = {
        plugins: {
            Legend: {
                display: true,
            },
            Tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.datasets.label}:${context.raw}`;
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
                navigate("/working-date-late-punch", { state: { data: { label, value } } })

            }
        }
    }

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch('http://localhost:8080/eacs/getdata', { method: "GET" });
                if (res) { // check if the response is okay
                    const data = await res.json();
                    if (data) {
                        setTotalemp(data.length);
                        setFlag(true);
                    }
                    console.log(data);
                    
                    setBackendData(data);
                } else {
                    console.log('Failed to fetch data:', res.status, res.statusText);
                }
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        }
        getData();
    }, []);
   
  
    return (
        <div id='Admin_home_container'>
             {
                flag ? <>
            <section id='first_row'>
                <h2>
           Welcome Admin
                </h2>
                <div id='header_right'>
                    <button onClick={() => navigate("/all-cluster")}>All Cluster</button>
                    <h3>{curr_date}</h3>
                </div>


            </section>
            <section id="admin_home_left">
                <ul>
                    <li onClick={() => navigate("/filtered-employee", { state: {label:"Total Employee",data:backendData} })}>
                        <h2>{totalemp}</h2>
                        <b>Total Employee</b>
                    </li>
                    <li onClick={() => navigate("/filtered-employee", { state: "Present" })}>
                        <h2>200</h2>
                        <b>Present</b>
                    </li> <li onClick={() => navigate("/filtered-employee", { state: "Present" })}>
                        <h2>100</h2>
                        <b>Absent</b>
                    </li>
                    <li onClick={() => navigate("/filtered-employee", { state: "Late Punch" })}>
                        <h2>100</h2>
                        <b>Late Punch</b>


                    </li>
                    <li>
                        <h2>100</h2>
                        <b>Working Days In Month</b>


                    </li>
                    <li onClick={() => navigate("/filtered-employee", { state: "Total Employee in Working Days" })}>
                        <h2>100</h2>
                        <b>Total Employee in Working Days</b>


                    </li>
                    <li onClick={() => navigate("/filtered-employee", { state: "Beyond 10" })}>Beyond 10</li>
                    <li onClick={() => navigate("/filtered-employee", { state: "Beyond 10:15" })}>Beyond 10:15</li>

                </ul>


                <div id='level_wise_late_punch_chart'>
                    <div id='level_chart'>
                        <Bar
                            data={data}
                            options={options}


                        />
                    </div>
                    <div id="summery_table">
                        <Summery_table />
                    </div>


                </div>


            </section>
            <section id="admin_home_right">
                <div className='chart-admin-page'>
                    <Doughnut
                        data={{
                            labels: apidata.map((data) => data.label),
                            datasets: [{
                                label: "Attendance Chart",
                                data: apidata.map((data) => data.value),
                            }]

                        }
                        }

                    />
                </div>
                <div className='late-punch-chart'>
                    <Bar
                        data={{
                            labels: ["21-30", "31,40", "41-50", "51-60"],
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
                        options={{
                            plugins: {
                                title: {
                                    text: "Age Wise Late Punch"
                                }
                            }
                        }}



                    />
                </div>



            </section>
            </>:<Loading/>}
        </div>
    )
}

export default Admin_home;