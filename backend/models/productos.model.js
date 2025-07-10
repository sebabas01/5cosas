import mongoose from "mongoose" // importa la libreria mongoose que permite interactuar con la base de datos
import { Schema, model } from "mongoose"// extrae los nodelos "schema" y "model" de mongoose para crear y definir modelos de datos

const EsquemaProductos = new Schema({ //define un nuevo esquema para los productos
    nombre: {
        type: String, // el campo "nombre" debe ser con letras
        required: true //valida que tenga contenido y no se quede vacío
    },
    precio: {
        type: Number,//el campo "precio" debe ser un número
        required: true//valida que tenga contenido y no se quede vacío
    }
})

const modeloProductos = model("Productos", EsquemaProductos)// crea un modelo "productos" basado en el esquema anterior
const productos = [//crea un arreglo de objetos cada uno con nombre y precio 
    { nombre: "Creatina Monohidratada", precio: 450 },
    { nombre: "Proteína Whey 2kg", precio: 950 },
    { nombre: "Multivitamínico Hombre", precio: 299 },
    { nombre: "BCAA 2:1:1", precio: 380 },
    { nombre: "Óxido Nítrico Pre-entreno", precio: 520 }
]
modeloProductos.insertMany(productos)//inserta todos los productos en la base de datos utilizando insertmany
    .then(() => {
        console.log(" Productos insertados correctamente")//si se einsertaron de manera correcta se mostrara el mensaje "Productos insertados correctamente"
        mongoose.connection.close() // cierra la conexión con la base de datos
    })
    .catch(err => {
        console.error("Error al insertar productos:", err)// si la inserción no se completa se mostará el mensaje "Error al insertar productos:"
        mongoose.connection.close()//cierra la base de datos
    })
