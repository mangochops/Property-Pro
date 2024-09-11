import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'willy',
  password: 'Wangui@12345',
  database: 'PropertyPro'
});

export default connection;
