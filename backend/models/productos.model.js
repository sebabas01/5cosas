import {Schema, model} from "mongoose"
import { type } from "os"

const EsquemaPalabras = new Schema({
    palabras:String

})

export const modeloPalabras = new model("Palabras", EsquemaPalabras)