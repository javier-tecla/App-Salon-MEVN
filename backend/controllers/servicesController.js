import { services } from '../data/beautyServices.js'
import mongoose from 'mongoose'
import Services from '../models/Services.js'

const  createService = async (req, res) => {
    if(Object.values(req.body).includes('')) {
        const error = new Error('Todos los campos son obligatorios')

        return res.status(400).json({
            msg: error.message
        })
    }

    try {
        const service = new Services(req.body)
        await service.save()

        res.json({
            msg: 'El Servicio se creo correctamente'
        })
    } catch (error) {
       console.log(error) 
    }
}


const getServices = (req, res) => {
    res.json(services)
}

const getServiceById = async (req, res) => {
    const { id } = req.params
   // Validar un object id
   if(!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('El ID no es válido')

    return res.status(400).json({
        msg: error.message
    })
}

   // Validar que exista
   const service = await Services.findById(id)
   if(!service) {
    const error = new Error('El Servicio no existe')

    return res.status(404).json({
        msg: error.message
    })
}

   // Mostrar el servicio
   res.json(service)
}

export {
    createService,
    getServices,
    getServiceById
}