
const sql = require('mssql');

class GetJDBCCasedata {
  constructor() {
    this.config = {
      user: 'sa',
      password: 'ongc@123',
      server: '172.195.122.0',
      port: 1433,
      database: 'HLS_DB',
      options: {
        encrypt: true, // Use encryption if the server requires it
        trustServerCertificate: true, // Trust server certificate (only if using self-signed cert)


        connectionTimeout: 60000 // Increase timeout to 30 seconds
      }
    };
    this.poolPromise = sql.connect(this.config)
      .then(pool => {
        if (pool.connected) {
          console.log('Connected to SQL Server');
          return pool;
        }
        throw new Error('Connection failed');
      });
  }

  async checkConnection() {
    try {
      const pool = await this.poolPromise;
      return 'Connection successful';
    } catch (err) {
      console.error('Database connection failed: ', err);
      throw err;
    }
  }
  async query(sqlQuery) {
    try {
      const pool = await this.poolPromise;
      const result = await pool.request().query(sqlQuery);
      console.log('Query result:', result.recordset); // Log the query result
      return result.recordset;
    } catch (err) {
      console.error('Query failed:', err);
      throw err;
    }
  }
  
  
}

module.exports = GetJDBCCasedata;

