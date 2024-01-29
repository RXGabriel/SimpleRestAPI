import { Router } from "express";
import multer from "multer";
import * as ApiController from "../controllers/apiController"

const router = Router();

const upload = multer({
  dest: './tmp'
})

router.get('/ping',ApiController.ping)
router.get('/random', ApiController.random)
router.get('/nome/:nome', ApiController.nome)

router.post('/upload',upload.single('avatar'),ApiController.updateFile)

export default router