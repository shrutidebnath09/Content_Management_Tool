import express from 'express';
import mongoose from 'mongoose';
import router from './routes/User-routes';
import blogRouter from './routes/blog-routes';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/user",router);
app.use("/api/blog",blogRouter)

mongoose.connect('mongodb+srv://admin:leGuDzTCadCH1Qpr@cluster0.nz2pqtu.mongodb.net/Blog?retryWrites=true&w=majority')
.then(()=>app.listen(5000))
.then(()=>console.log("Connected To Database and Listening To Localhost 5000"))
.catch((err) => console.log(err));
