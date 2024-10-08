import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'Delivery'
    }).then(() => console.log("DB connected"))
        .catch(error => console.log(error))
}