const model=require('./cars-model')
const checkCarId = (req, res, next) => {
model.getById(req.params.id)
.then((cars) => {
  if(!cars){
    res.status(404).json({message:"id does not exist"})
    
  }
  else{res.status(200).json(cars)}
  
})
.catch((err) => {
  res.status(500).json({message:err.message})
})
}

const checkCarPayload = (req, res, next) => {
const{vin,make,model,mileage}=req.body
const returnError =(error)=>{
  return res.status(400).json({message:`${error} is missing`})
}
  if (!vin||!make||!model||!mileage){
    const missing = !vin?"vin":!make?"make":!model?"model":!mileage?"mileage":"none"
    returnError(missing)
  }
  else{
  res.car=req.body
  return next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  if(req.body.vin.length!==17){
   res.status(400).json({message:`vin ${req.body.vin} is invalid`})
  }
  else{
    next()
  }
}

const checkVinNumberUnique = (req, res, next) => {
 model.checkVinIsUnique(req.body.vin)
 .then((cars)=>{
if(cars.length===0){
  next()
}
else{
  res.status(400).json({message:`vin ${req.body.vin} already exists`})
}
 })
 .catch((err)=>{
   res.status(500).json({message:err.message})
 })
}
module.exports ={
  checkCarId,checkCarPayload,checkVinNumberUnique,checkVinNumberValid
}