import { connect } from 'mongoose';
import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE as string,
  process.env.MYSQL_USER as string,
  process.env.MYSQL_PASSWORD as string,
  {
    dialect: 'mysql',
    port: parseInt(process.env.MYSQL_HOST as string)
  } 
)


export const mongoConnection = async() => {
  try{
    console.log("Conectando ao BD...")
    connect(process.env.MONGO_URL as string)

    console.log("Conectado ao BD")
  }catch(error){
    console.log("Erro ao conectar no BD", error)
  }
}