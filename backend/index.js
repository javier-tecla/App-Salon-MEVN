import express from "express"
import servicesRoutes from './routes/servicesRoutes.js'

// Configurar la app
const app = express()

// Definir una ruta
app.use('/api/services', servicesRoutes)

// Definir puerto
const PORT = process.env.PORT || 4000

// arrancar la app
app.listen(PORT, () => {
    console.log('El servidor se esta ejecutando en el puerto:',PORT)
})