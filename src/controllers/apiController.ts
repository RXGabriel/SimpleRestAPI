import {Request, Response} from 'express'
import {Phrase} from '../models/Phrase'
import {sequelize} from '../instance/mysql'

export const ping = (req: Request, res: Response) => {
  res.json({pong: true})
}

export const random = (req: Request, res: Response) => {
  let nRandom : number = Math.floor(Math.random() * 10)
  res.json({number: nRandom})
}

export const nome = (req: Request, res: Response) => {
  let nome : string = req.params.nome
  res.json({nome: `Você enviou o nome ${nome}`})
}

export const createPhrase = async (req: Request, res: Response) => {
  try {
    const { author, txt } = req.body;
    const newPhrase = await Phrase.create({ author, txt });

    res.json({ id: newPhrase.id, author, txt });

    
    await sequelize.authenticate()
  } catch (error) {
    console.error('Error creating phrase:', error);
  }
};