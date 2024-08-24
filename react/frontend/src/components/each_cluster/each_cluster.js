import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { Chart as ChartJS } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
function Eeach_cluster() {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  return (
    <div id='each_cluster_container'>

      <header>

        <nav>
          <h1>{data}</h1>
          <ul>
            <li>
              <h2>100</h2>
              <b>Total Employee</b>
            </li>
            <li>
              <h2>200</h2>
              <b>Present</b>
            </li> <li>
              <h2>100</h2>
              <b>Absent</b>
            </li>
            <li>
              <h2>100</h2>
              <b>Late Punch</b>
            </li>


          </ul>
          <fieldset>
            <legend>Filter</legend>
            <select>
              <option value="#">time</option>
              <option value="day">day</option>
              <option value="monthly">monthly</option>
              <option value="yearly">yearly</option>

            </select>
            <select>
              <option value="#">age</option>
              <option value="day">21-30</option>
              <option value="monthly">31-40</option>
              <option value="yearly">41-50</option>
              <option value="yearly">51-60</option>

            </select>
            <select>
              <option value="#">Level</option>
              <option value="day">TE</option>
              <option value="monthly">PE</option>
              <option value="yearly">Manager</option>
              <option value="yearly">DE</option>

            </select>
          </fieldset>
        </nav>
      </header>
      <main>
        <section id='each_cluster_graph_box'>
          <div id='total_percentage_graph'>

            <Doughnut
              data={{
                labels: ["Present", "Absent", "Late Punch"],
                datasets: [{
                  label: "Cluster Attendance Chart",
                  data: [500, 50, 70],
                }]

              }
              }

            />
          </div>
          <div id='age_wise_graph'>
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

          <div id='each_level_chart'>
            <Bar
              data={{
                labels: ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9"],
                datasets: [
                  {
                    label: "Level Wise Late Punch",
                    data: [100, 200, 300, 400, 20, 30, 300, 400, 100]
                  }
                ]
              }}
              options={{
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
              }


            />
          </div>
        </section>
        <table border="collapse">
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
      </main>
    </div>
  )
}

export default Eeach_cluster