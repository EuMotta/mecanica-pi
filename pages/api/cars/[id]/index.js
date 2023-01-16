import Cars from '../../../../models/Cars';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  const newCar = new Cars({
    owner: {
      name: req.body.owner.name,
      lastName: req.body.owner.lastName,
      address: req.body.owner.address,
      email: req.body.owner.email,
      phone: req.body.owner.phone,
    },
    Ownername: req.body.Ownername,
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    year: req.body.year,
    registration: req.body.registration,
    odometer: req.body.odometer,
    transmission: req.body.transmission,
    fuel: req.body.fuel,
    farol: {
      model: req.body.farol.model,
      buyDate: req.body.farol.buyDate,
      location: req.body.farol.location,
    },
    tires: {
      model: req.body.tires.model,
      buyDate: req.body.tires.buyDate,
      frontSize: req.body.tires.frontSize,
      rearSize: req.body.tires.rearSize,
      location: req.body.tires.location,
    },
    brakes: {
      model: req.body.brakes.model,
      buyDate: req.body.brakes.buyDate,
      location: req.body.brakes.location,
    },
    battery: {
      model: req.body.battery.model,
      buyDate: req.body.battery.buyDate,
      location: req.body.battery.location,
    },
    oil: {
      model: req.body.oil.model,
      buyDate: req.body.oil.buyDate,
      location: req.body.oil.location,
    },
  });
  const cars = await newCar.save();
  await db.disconnect();
  res.send({ message: '500 added successfully!', cars });
};

export default handler;
