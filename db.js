import mysql from 'mysql2'
// LOCAL CONNECTION
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '01612178331@Ks',
    database: 'test'
})


// REMOTE CONNECTION
/*  const db = mysql.createConnection({
    host: 'containers-us-west-81.railway.app',
    user: 'root',
    password: 'sskx8I9sI4SoFjDHGFy4',
    database: 'railway',
    port: 7055,
})  */ 


export default db;