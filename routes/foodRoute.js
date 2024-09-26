import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'

import multer from "multer"

const foodRoutes = express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })
//ednpoints
foodRoutes.post("/add", upload.single("image"), addFood);
foodRoutes.get("/list", listFood);
foodRoutes.post("/remove", removeFood);

export default foodRoutes;