exports.up = function(knex){
return knex.schema.createTable("cars",table=>{
    table.increments()
    table.string("vin",128).notNullable()
    table.string("make",10).notNullable()
    table.string("model",20).notNullable()
    table.integer("mileage",20).notNullable()
    table.string("title",20)
    table.string("transmission")

})
}
exports.down = function(knex){
    return knex.schema.dropTableIfExists("cars")
}