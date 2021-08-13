require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
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
    {name: 'Flatbed', category: categories[0], price: 55},
    {name: 'Wheellift', category: categories[0], price: 55},
    {name: 'Winch Backwards', category: categories[0], price: 100},
    {name: 'Winch', category: categories[1], price: 80},
    {name: 'Tire Change w/spare', category: categories[1], price: 40},
    {name: 'Battery Charge', category: categories[1], price: 35},
    {name: 'Lockout', category: categories[2], price: 45},
  ]);

  console.log(services)

  process.exit();

})();