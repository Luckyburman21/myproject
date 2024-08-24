import React from 'react'
import { useNavigate } from "react-router-dom";
function Summery_table() {
    const navigate = useNavigate();
    return (
        <div id='Summery_table'>
            <h1>Late Punch Summary</h1>
            <table border="collapse">

                <thead>
                    <tr>
                        <th>Working Days Late Punch Percentage</th>
                        <th>Beyond 10:00</th>
                        <th>Beyond 10:15</th>
                        <th>List</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{'> 80%'}</td>
                        <td>115</td>
                        <td>100</td>
                        <td className='open_link' onClick={() => navigate("/working-date-late-punch", { state: { data: { label: "Late Punch >= 80% Beyond 10:00 and 10:15", value: "" } } })}>Open</td>

                    </tr>
                    <tr>
                        <td>{'> 50%'}</td>
                        <td>115</td>
                        <td>100</td>
                        <td className='open_link' onClick={() => navigate("/working-date-late-punch", { state: { data: { label: "Late Punch >= 50% Beyond 10:00 and 10:15", value: "" } } })}>Open</td>

                    </tr>
                    <tr>
                        <td>{'> 25%'}</td>
                        <td>115</td>
                        <td>100</td>
                        <td className='open_link' onClick={() => navigate("/working-date-late-punch", { state: { data: { label: "Late Punch >= 25% Beyond 10:00 and 10:15", value: "" } } })}>Open</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Summery_table