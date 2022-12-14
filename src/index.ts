import express ,{json,urlencoded} from'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import AddDataSource from './AppDataSource';
import productRouter from"./routes/products.routes"


const app = express();
config();
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/product", productRouter)

app.get('*',(req,res)=>{
    res.status(404).json({message:'404'})
})


app.listen(process.env.PORT, async() => {
    console.log(`app listen on part ${process.env.PORT}`);
    try{
        await AddDataSource.initialize();
        console.log('connected to database');
        
    }
    catch (error){
        console.log('not connected to database');
        throw new Error(`${(error as Error).message}`)
    }
});