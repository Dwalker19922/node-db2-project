const db = require('../../data/db-config')

const getAll = () => {
return db("cars")
}

const getById = (id) => {
  return db('cars')
  .where({ id })
  .first();
}

const create = (car) => {
  return db("cars")
  .insert(car)
  .then((ids) =>{
    return getById(ids[0])
  })
  
}

const checkVinIsUnique=(rVin)=>{
  return db("cars")
  .where("vin",rVin)
}
module.exports ={
  getAll,
  getById,
  create,
  checkVinIsUnique
}