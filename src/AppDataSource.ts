import { DataSource } from 'typeorm';

import "reflect-metadata"
import { config } from 'dotenv';
import { Order } from './entities/Order';
import { Category } from './entities/Category';
import { OrderLines } from './entities/OrderLines';
import { Product } from './entities/Product';
config();

const AddDataSource = new DataSource({
    type: "postgres" ,
    host: process.env.PGHOST,
    port: Number(`${process.env.PGPORT}`),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: true,
    logging: false,
    entities: [Order,Category,OrderLines,Product],
    migrations:["mirgtation/*.ts"],
    subscribers: [],
 
});

export default AddDataSource