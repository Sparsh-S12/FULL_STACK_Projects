import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";
const app=express();
dotenv.config();
// middlewares
app.use(cors());
app.use(express.json());
app.use("/user",userRouter);
app.use("/posts",postRouter);
//connections
mongoose.set('strictQuery', false);
mongoose
.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.rzvw1yr.mongodb.net/?retryWrites=true`
    )
.then(() =>
app.listen(process.env.PORT,()=>console.log(`Connection Succesfull and Server Running on port ${process.env.PORT}`))
)
.catch((err) => console.log(err));