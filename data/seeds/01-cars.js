exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cars').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('cars').insert([
          {id: 1, vin:"4f5d4f5adf5dsfa4f", make:"mecury",model:"mountaneer",mileage:215000,title:"the heritage",transmission:"idk"},
          {id: 2, vin:"4f5d4sdfsfddffa4f", make:"ford",model:"mustang",mileage:115000,title:"the heritage",transmission:"idk"},
          {id: 3, vin:"er5d4f5adf5dsfa4f", make:"toyota",model:"rav4",mileage:315000,title:"the heritage",transmission:"idk"},
          {id: 4, vin:"9f5d4f5adf5dsfa4f", make:"volswagen",model:"jetta",mileage:215000,title:"the heritage",transmission:"idk"},
          {id: 5, vin:"5f5d4f5adf5dsfa4f", make:"chevy",model:"trailblazer",mileage:125000,title:"the heritage",transmission:"idk"},
        ]);
      });
  };
