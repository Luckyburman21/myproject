const express = require('express');
const router = express.Router();
const GetJDBCCasedata = require('./db_connection/database_connection');

let db;

async function initializeDb() {
    try {
        db = new GetJDBCCasedata();
        await db.checkConnection();
    } catch (err) {
        console.error('Error initializing database connection:', err);
    }
}

initializeDb();

router.get('/getdata', async (req, res) => {
    console.log('router 2');
    if (!db) {
        console.log('router 3');
        return res.status(500).json({ error: 'Database connection not established' });
    }

    try {
        console.log('router 4');
        const employees = await db.query('SELECT * FROM hls_schema_common.tbl_employee_details');
        console.log('Data from database:', employees.rows);
        res.status(200).json(employees.rows);
    } catch (error) {
        console.error('Error fetching employee data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
