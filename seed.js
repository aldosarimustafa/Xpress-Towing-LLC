require('dotenv').config();
require('./config/database');

const Service = require('./models/service');

(async function() {
  await Service.deleteMany({});
  const services = await Service.create([
    {name: 'Flatbed Load', price: 55},
    {name: 'Wheellift', price: 55},
    {name: 'Tow/Mile', price: 5},
    {name: 'Winch Backwards', price: 100},
    {name: 'Winch', price: 80},
    {name: 'Tire Change w/spare', price: 40},
    {name: 'Battery Charge', icon: <i class="fas fa-car-battery"></i>, price: 35},
    {name: 'Lockout', price: 45},
  ]);

  console.log(services)

  process.exit();

})();