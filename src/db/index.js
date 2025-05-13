import { Pool } from 'pg';
import { config } from 'dotenv';
config();

const db = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    database: process.env.PG_DB
});

export default db;