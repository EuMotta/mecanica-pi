import Cars from '../../../../models/Cars';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  const newCar = new Cars({
    Ownername: req.body.Ownername,
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    year: req.body.year,
    registration: req.body.registration,
    odometer: req.body.odometer,
    transmission: req.body.transmission,
    fuel: req.body.fuel,
    farol: {
      model: req.body.farolModel,
      buyDate: req.body.farolBuyDate,
      location: req.body.farolLocation,
    },
    tires: {
      model: req.body.tiresModel,
      buyDate: req.body.tiresBuyDate,
      frontSize: req.body.tiresFrontSize,
      rearSize: req.body.tiresRearSize,
      location: req.body.tiresLocation,
    },
    brakes: {
      model: req.body.brakesModel,
      buyDate: req.body.brakesBuyDate,
      location: req.body.brakesLocation,
    },
    battery: {
      model: req.body.batteryModel,
      buyDate: req.body.batteryBuyDate,
      location: req.body.batteryLocation,
    },
    oil: {
      model: req.body.oilModel,
      buyDate: req.body.oilBuyDate,
      location: req.body.oilLocation,
    },
  });
  const cars = await newCar.save();
  await db.disconnect();
  res.send({ message: '500 added successfully!', cars });
};

export default handler;
