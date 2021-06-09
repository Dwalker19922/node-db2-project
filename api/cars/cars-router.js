const express = require('express')
const models = require('./cars-model')
const cars = express()
const{checkCarId,checkCarPayload,checkVinNumberValid,checkVinNumberUnique}=require('./cars-middleware')
cars.get("/",(req, res) =>{
models.getAll()
.then((cars) =>{res.json(cars)})
.catch((err) =>{
    console.error(err)
})
})
cars.get("/:id", checkCarId,(req, res) =>{
    models.getById(req.params.id)
    .then((cars) =>{res.json(cars)})
    .catch((err) =>{
        res.json({error: err.message})
    })
    })
    cars.post("/",checkCarPayload,checkVinNumberValid,checkVinNumberUnique,(req, res) =>{
        models.create(req.body)
        .then((cars) =>{res.json(cars)})
        .catch((err) =>{
            res.json({error: err.message})
        })
        })

module.exports =cars
