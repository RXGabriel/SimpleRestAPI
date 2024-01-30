import express,{ Request, Response,ErrorRequestHandler } from 'express';
import path from 'path'; 
import dotenv from 'dotenv';
import cors from 'cors'
import { MulterError } from 'multer';
import apiRoutes from './routes/api'

dotenv.config();
const server = express();

server.use(cors())

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({ extended: true }))
server.use(apiRoutes)

server.use((req:Request, res:Response)=>{
  res.status(404)
  res.json({error: 'Page not found'})
})

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(400);

  if (err instanceof MulterError) {
    res.json({ error: err.code });
  } else {
    console.error(err);
    res.json({ error: 'Error' });
  }
};
server.use(errorHandler)

server.listen(process.env.PORT)