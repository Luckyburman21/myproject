const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;

const GetJDBCCasedata = require('./db_connection/database_connection');
let db = new GetJDBCCasedata();
// const Router = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));

app.get('/getdata', async (req, res) => {
  console.log("Request received");
  try {
    const employees = await db.query("SELECT TOP 15 * FROM hls_schema_common.tbl_employee_details");
    console.log('Data from database:', employees);
    res.status(200).json(employees); // Ensure the response is in JSON format
  } catch (error) {
    console.error('Error fetching employee data:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Send JSON error response
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
