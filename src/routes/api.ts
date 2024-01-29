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

router.post('/upload',upload.fields([
  {name: 'avatar', maxCount: 1},
  {name: 'gallery',maxCount: 3}
]),ApiController.updateFile)

export default router 