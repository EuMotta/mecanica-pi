import Cars from '../../../models/Cars';
import db from '../../../utils/db';

const postHandler = async (req, res) => {
  await db.connect();
  const newCar = new Cars({
    Ownername: 'a',
    manufacturer: 'a',
    model: 'a',
    year: 'a',
    registration: 'a',
    odometer: 'a',
    transmission: 'a',
    fuel: 'a',
    farol: {
      model: 'a',
      buyDate: 'a',
      location: 'a',
    },
    tires: {
      model: 'a',
      buyDate: 'a',
      frontSize: 'a',
      rearSize: 'a',
      location: 'a',
    },
    brakes: {
      model: 'a',
      buyDate: 'a',
      location: 'a',
    },
    battery: {
      model: 'a',
      buyDate: 'a',
      location: 'a',
    },
    oil: {
      model: 'a',
      buyDate: 'a',
      location: 'a',
    },
  });
  const cars = await newCar.save();
  await db.disconnect();
  res.send({ message: 'Car added successfully!', cars });
};

const getHandler = async (req, res) => {
  await db.connect();
  const cars = await Cars.find({});
  await db.disconnect();
  res.send(cars);
};

const handler = async (req, res) => {
  if (req.method === 'GET') {
    return getHandler(req, res);
  } if (req.method === 'POST') {
    return postHandler(req, res);
  }
  return res.status(400).send({ message: 'Deu ruim!' });
};

export default handler;
