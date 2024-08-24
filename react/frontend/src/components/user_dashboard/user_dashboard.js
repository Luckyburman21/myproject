import React from 'react'

function User_dashboard() {
  return (
    <div id='user_dashboard'>

      <div id="welcome-line">
        <h3>Welcome Rohit Mangare</h3>
        <fieldset>
          <legend>Filter</legend>
          <input style={{ "width": "45%" }} type="date" placeholder="filter date" />
          <select>
            <option value="#">select</option>
            <option value="#">Present</option>
            <option value="#">Absent</option>
            <option value="#">Late Punch</option>


          </select>
        </fieldset>

      </div>
      <main>
        <table border="collapse">
          <thead>
            <tr>

              <th>EMP_ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Department</th>
              <th>Level</th>
              <th>IN_Time</th>
              <th>Out_Time</th>
              <th>IS_Present</th>
              <th>Working_Hour</th>
              <th>Late Punch Time</th>
              <th>Total Late Punch In Month</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td>820056</td>
              <td>Nishant</td>
              <td>23</td>
              <td>BSTC</td>
              <td>TE</td>
              <td>8.00</td>
              <td>5.00</td>
              <td>true</td>
              <td>7</td>
              <td>5.30sec</td>
              <td>10</td>
            </tr>
            <tr>

              <td>820057</td>
              <td>Nishant</td>
              <td>26</td>
              <td>BSTC</td>
              <td>PE</td>
              <td>8.00</td>
              <td>5.00</td>
              <td>true</td>
              <td>7</td>
              <td>3.20sec</td>
              <td>10</td>
            </tr>
            <tr>

              <td>820058</td>
              <td>Nishant</td>
              <td>30</td>
              <td>BSTC</td>
              <td>DE</td>
              <td>8.00</td>
              <td>5.00</td>
              <td>true</td>
              <td>7</td>
              <td>11.30sec</td>
              <td>10</td>
            </tr>
            <tr>

              <td>820059</td>
              <td>Nishant</td>
              <td>35</td>
              <td>BSTC</td>
              <td>Manager</td>
              <td>8.00</td>
              <td>5.00</td>
              <td>true</td>
              <td>7</td>
              <td>2.30sec</td>
              <td>10</td>
            </tr>
            <tr>

              <td>820060</td>
              <td>Nishant</td>
              <td>40</td>
              <td>BSTC</td>
              <td>PE</td>
              <td>8.00</td>
              <td>5.00</td>
              <td>true</td>
              <td>7</td>
              <td>15.10sec</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default User_dashboard