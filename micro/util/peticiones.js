const postgres=require("pg");

const con=new postgres.Pool({
    user: "parko",
    host: "node_db",
    database: "test",
    password: "12345",
    port: "5432",

})

module.exports =con;