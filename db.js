import mysql from 'mysql2'
// LOCAL CONNECTION
console.log(process.env.MySQL_HOST)
const db = mysql.createConnection({
    host: process.env.MySQL_HOST,
    user: process.env.MySQL_USER,
    password: process.env.MySQL_PASSWORD,
    database: process.env.MySQL_DATABASE,
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