import express from "express"

// Configurar la app
const app = express()

// Definir una ruta
app.get('/', (req, res) => {

    const produts = [
        {
            id: 1,
            price: 30,
            name: 'Laptop'
        },
        {
            id: 2,
            price: 40,
            name: 'Monitor'
        }
    ]

    res.json(produts)
})

// Definir puerto
const PORT = process.env.PORT || 4000

// arrancar la app
app.listen(PORT, () => {
    console.log('El servidor se esta ejecutando en el puerto:',PORT)
})