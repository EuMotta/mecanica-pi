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
    car: {
      Ownername: req.body.car.Ownername,
      manufacturer: req.body.car.manufacturer,
      model: req.body.car.model,
      year: req.body.car.year,
      registration: req.body.car.registration,
      odometer: req.body.car.odometer,
      transmission: req.body.car.transmission,
      fuel: req.body.car.fuel,
      farol: {
        model: req.body.car.farol.model,
        buyDate: req.body.car.farol.buyDate,
        location: req.body.car.farol.location,
      },
      tires: {
        model: req.body.car.tires.model,
        buyDate: req.body.car.tires.buyDate,
        frontSize: req.body.car.tires.frontSize,
        rearSize: req.body.car.tires.rearSize,
        location: req.body.car.tires.location,
      },
      brakes: {
        model: req.body.car.brakes.model,
        buyDate: req.body.car.brakes.buyDate,
        location: req.body.car.brakes.location,
      },
      battery: {
        model: req.body.car.battery.model,
        buyDate: req.body.car.battery.buyDate,
        location: req.body.car.battery.location,
      },
      oil: {
        model: req.body.car.oil.model,
        buyDate: req.body.car.oil.buyDate,
        location: req.body.car.oil.location,
      },
    },
  });
  const cars = await newCar.save();
  await db.disconnect();
  res.send({ message: '500 added successfully!', cars });
};

export default handler;
