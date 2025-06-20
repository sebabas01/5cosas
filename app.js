"hola"
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("funcona la conexion a la base de datos")
}
)
.catch((error)=>{
    console.log("no jalo esta vaina")
}
)

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("escuchando al servidor")
})