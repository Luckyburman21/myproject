import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, LabelList } from 'recharts';

function All_cluster() {
    // Generate sample data
    const navigate=useNavigate();
    const data = Array.from({ length: 22 }, (_, index) => ({

        name: `Cluster${index + 1}`,
        value: 1, // Each cluster has an equal value; adjust as needed
    }));

    // Define colors for the segments
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4444', '#A2C2E4', '#D0E9F2', '#D6A4A4', '#D9F3F8', '#F6D8CE', '#D1F7F0', '#E0B8C1', '#E7B4C3', '#E1F0C9', '#F9D6A4', '#F1A1A1', '#F8F5D0', '#D6F1D2', '#D9D3F5', '#F9E0E5', '#F5D6E0', '#E1F7F1', '#E5E0F6', '#F6D3D6'];

    // Custom label component to render labels outside the chart
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius + 30; // Distance of label from pie chart
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <g>
                <text x={x} y={y} textAnchor={x > cx ? 'start' : 'end'} fill="#333" fontSize={15}>
                    {data[index].name}
                </text>
                <line
                    x1={cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN)}
                    y1={cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN)}
                    x2={x}
                    y2={y}
                    stroke="black"
                    strokeWidth={2}
                    strokeDasharray="0"
                />
            </g>
        );
    };
 
    return (
        <div id="all_cluster_container">
            <header id='all-cluster-header'>
                <nav>
                    <ul>
                        <li>
                            <h2>100</h2>
                            <b>Total Employee</b>
                        </li>
                        <li>
                            <h2>200</h2>
                            <b>Present</b>
                        </li>
                        <li>
                            <h2>100</h2>
                            <b>Absent</b>
                        </li>
                        <li>
                            <h2>100</h2>
                            <b>Late Punch</b>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="All_cluster_graph_box" >
                    <PieChart width={800} height={800} margin="auto">
                        <Pie
                            data={data}
                            cx={450}
                            cy={350}
                            outerRadius={250}
                            margin="auto"
                            backgroundColor="blue"
                            fill="#8884d8"
                            dataKey="value"
                            labelLine={false} // Disable default label lines
                            label={renderCustomizedLabel} // Use custom label rendering
                           
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} onClick={()=>navigate("/each-cluster",{state:`Cluster${index}`})}/>
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </section>
            </main>
        </div>
    );
}

export default All_cluster;
