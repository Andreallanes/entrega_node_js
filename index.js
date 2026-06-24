console.log ("Programa iniciado");
console.log ("Hola soy Codex");

import express from "express";
import cors from "cors";

const app = express ();

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin === `http://localhost:${PORT}`) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));






const PORT = 3000; 

app.listen(PORT, () => { 
    console.log(`Servidor en http://localhost:${PORT}`); 
});