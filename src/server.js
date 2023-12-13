import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT =process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

//Conexion a la base de datos
mongoose.connect("mongodb://localhost:27017/db_carta", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Conexión a mongoDB establecida correctamente");
});

//Ruta de ejemplo
app.get("/api/message", (req, res) => {
    res.json({message: "Hola desde el servidor express"});
});

app.listen(PORT, () => {
    console.log(`Servidor expres escuchando en el puerto ${PORT}`);
});