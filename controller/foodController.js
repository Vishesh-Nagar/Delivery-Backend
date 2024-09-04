import foodModel from "../middleware/model/foodModel.js";
import fs from "fs";
import { menu_list } from '../controller/assets.js'; // Import from assets.js

// Add food item
const addFood = async (req, res) => {
    try {
        let image_filename = "";
        if (req.file) {
            image_filename = req.file.filename;
        } else if (req.body.imageName && menu_list[req.body.imageName]) {
            image_filename = menu_list[req.body.imageName]; // Use the image from assets.js
        } else {
            throw new Error("No file uploaded or invalid image name");
        }

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error.message });
    }
}

// All food list 
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })

    }
}

// Remove food
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`upload/${food.image}`, () => { })
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "food removed" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}

export { addFood, listFood, removeFood }
