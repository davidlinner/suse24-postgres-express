import postgres from "postgres";

const sql = postgres({
    host                 : 'localhost',            // Postgres ip address[s] or domain name[s]
    port                 : 15432,                   // Postgres server port[s]
    database             : 'postgres',              // Name of database to connect to
    username             : process.env['DB_USER'],            // Username of database user
    password             : process.env['DB_PASSWORD'],            // Password of database user
})

export default sql;
