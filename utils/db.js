import mysql from 'mysql2/promise';
//https://github.com/tejisav/nextjs-express-mysql-starter/blob/master/src/dbconfig/dbconfig.js
const DBUtils={
    getConnection : async ()=>{
        const config = {
            host: process.env.db_host,
            user: process.env.db_user,
            password: process.env.db_password,
            database: process.env.db_database,
            connectionLimit: process.env.db_connectionLimit,
        }
        // create the connection to database
        return await mysql.createConnection(config);
    }
}

export default DBUtils;