import Cars from '../../../models/Cars';
import db from '../../../utils/db';

const postHandler = async (req, res) => {
  await db.connect();
  const newCar = new Cars({
    Ownername: '',
    manufacturer: '',
    model: '',
    year: '',
    registration: '',
    odometer: '',
    transmission: '',
    fuel: '',
    farol: {
      model: '',
      buyDate: '',
      location: '',
    },
    tires: {
      model: '',
      buyDate: '',
      frontSize: '',
      rearSize: '',
      location: '',
    },
    brakes: {
      model: '',
      buyDate: '',
      location: '',
    },
    battery: {
      model: '',
      buyDate: '',
      location: '',
    },
    oil: {
      model: '',
      buyDate: '',
      location: '',
    },
  });
  const cars = await newCar.save();
  await db.disconnect();
  res.send({ message: 'Carro adicionado com sucesso!', cars });
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
  return res.status(400).send({ message: 'Deu merda!' });
};

export default handler;
