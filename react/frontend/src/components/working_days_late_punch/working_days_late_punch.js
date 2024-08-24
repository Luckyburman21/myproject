import React from 'react'
import { useLocation } from "react-router-dom";
function Working_days_late_punch() {
    const location = useLocation("");
    const data = location.state;

    return (
        <div id='filter_emp_container'>
            <header>
                <h1>{data.data.label}</h1>



                <div id="right_div" style={{width:"30%",padding:"0 2rem",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                    <fieldset style={{width:"40%"}}>
                        <legend>Filter</legend>
                       
                        <input type="date" ></input>
                    </fieldset>
                    <button>Export PDF</button>
                </div>


            </header>

            <table border="collapse" style={{ margin: "0 auto", width: "90%" }}>

                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>EMP_ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Level</th>
                        <th>IN_Time</th>
                        <th>Out_Time</th>
                        <th>Working_Hour</th>
                        <th>Late Punch Time</th>
                        <th>Total Late Punch In Month</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>820056</td>
                        <td>Nishant</td>
                        <td>23</td>
                        <td>BSTC</td>
                        <td>TE</td>
                        <td>8.00</td>
                        <td>5.00</td>
                        <td>7</td>
                        <td>5.30sec</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>820057</td>
                        <td>Nishant</td>
                        <td>26</td>
                        <td>BSTC</td>
                        <td>PE</td>
                        <td>8.00</td>
                        <td>5.00</td>
                        <td>7</td>
                        <td>3.20sec</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>820058</td>
                        <td>Nishant</td>
                        <td>30</td>
                        <td>BSTC</td>
                        <td>DE</td>
                        <td>8.00</td>
                        <td>5.00</td>
                        <td>7</td>
                        <td>11.30sec</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>820059</td>
                        <td>Nishant</td>
                        <td>35</td>
                        <td>BSTC</td>
                        <td>Manager</td>
                        <td>8.00</td>
                        <td>5.00</td>
                        <td>7</td>
                        <td>2.30sec</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>820060</td>
                        <td>Nishant</td>
                        <td>40</td>
                        <td>BSTC</td>
                        <td>PE</td>
                        <td>8.00</td>
                        <td>5.00</td>
                        <td>7</td>
                        <td>15.10sec</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Working_days_late_punch