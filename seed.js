require('dotenv').config();
require('./config/database');

const Service = require('./models/service');

(async function() {
  await Service.deleteMany({});
  const services = await Service.create([
    {name: 'Flatbed Load', icon: "fas fa-truck-loading", price: 55},
    {name: 'Wheellift', icon: "fas fa-truck-pickup",price: 55},
    {name: 'Tow/Mile', icon: "fas fa-tachometer-alt",price: 5},
    {name: 'Winch Backwards', icon: "fab fa-rev",price: 100},
    {name: 'Winch', icon: "fas fa-magnet",price: 80},
    {name: 'Tire Change w/spare', icon: "fas fa-retweet",price: 40},
    {name: 'Battery Charge', icon: "fas fa-car-battery", price: 35},
    {name: 'Lockout', icon: "fas fa-unlock",price: 45},
  ]);

  console.log(services)

  process.exit();

})();