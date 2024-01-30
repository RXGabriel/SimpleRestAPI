import { unlink } from 'fs/promises'
import sharp from 'sharp'
import {Request, Response} from 'express'

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
export const updateFile = async (req: Request, res: Response) => {
  if (req.file) {
    const filename = `${req.file.filename}.jpg`;

    await sharp(req.file.path)
      .resize(300, 300)
      .toFormat('jpeg')
      .toFile(`./public/images/${filename}`);

    await unlink(req.file.path); 

    res.json({ image: `${filename}` });
  } else {
    res.status(400),
    res.json({ error: 'File not found' })
  }
};


