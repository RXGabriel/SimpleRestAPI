import { Router } from "express";
import multer from "multer";
import * as ApiController from "../controllers/apiController"

const upload = multer({
  dest: './tmp',
  fileFilter: (req, file, cb) => {
    const allowed:string[] = ['image/jpeg','image/jpg','image/png'];

    console.log("INFORMAÇÔES",file)
    cb(null, allowed.includes(file.mimetype))
  },
  limits:{
    fieldSize: 20000000
  }
})

const router = Router();

router.get('/ping',ApiController.ping)
router.get('/random', ApiController.random)
router.get('/nome/:nome', ApiController.nome)

router.post('/upload',upload.single('avatar'),ApiController.updateFile)

export default router 