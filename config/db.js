// import mongoose from "mongoose";

// export const connectDB = async () => {

//     await mongoose.connect('mongodb+srv://nagarvishesh16:alphabeetagamma123@delivery.dd6hx.mongodb.net/Food-del').then(() => {
//         console.log("Connected to MongoDB");
//     })
// }
import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'Delivery'
    }).then(() => console.log("DB connected"))
        .catch(error => console.log(error))
}