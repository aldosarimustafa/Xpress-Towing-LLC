require('dotenv').config();
require('./config/database');

// const Category = require('./models/category');
const Service = require('./models/service');

(async function() {

//   await Category.deleteMany({});
//   const categories = await Category.create([
//     {name: 'Tow', sortOrder: 10},
//     {name: 'Winch', sortOrder: 20},
//     {name: 'Tire Change', sortOrder: 30},
//     {name: 'Battery Charge', sortOrder: 40},
//     {name: 'Lockout', sortOrder: 50},
//   ]);

  await Service.deleteMany({});
  const services = await Service.create([
    {name: 'Flatbed Load', price: 55},
    {name: 'Wheellift', price: 55},
    {name: 'Tow/Mile', price: 5},
    {name: 'Winch Backwards', price: 100},
    {name: 'Winch', price: 80},
    {name: 'Tire Change w/spare', price: 40},
    {name: 'Battery Charge', price: 35},
    {name: 'Lockout', price: 45},
  ]);

  console.log(services)

  process.exit();

})();