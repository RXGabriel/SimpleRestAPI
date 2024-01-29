import { Router } from "express";
import multer from "multer";
import * as ApiController from "../controllers/apiController"


const storageConfig =multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './tmp')
  },

  filename: (req, file, cb) => {
    let randomName = Math.floor(Math.random() * 1000000)
    cb(null, `${randomName+Date.now()}.jpg`)
  }
})

const upload = multer({
  storage: storageConfig
})
const router = Router();

router.get('/ping',ApiController.ping)
router.get('/random', ApiController.random)
router.get('/nome/:nome', ApiController.nome)

router.post('/upload',upload.single('avatar'),ApiController.updateFile)

export default router 