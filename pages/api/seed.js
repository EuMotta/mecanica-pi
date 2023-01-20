import Cars from '../../models/Cars';
import Owner from '../../models/Owner';
import CarData from '../../models/CarData';
import User from '../../models/User';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await CarData.deleteMany();
  await Cars.deleteMany();
  await Owner.deleteMany();
  await User.deleteMany();
  await CarData.insertMany(data.carData);
  await Owner.insertMany(data.owner);
  await Cars.insertMany(data.cars);
  await User.insertMany(data.user);
  await db.disconnect();

  res.send({ message: 'Maníaco da Seed!' });
};

export default handler;
