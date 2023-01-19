import Cars from '../../models/Cars';
import Owner from '../../models/Owner';
import CarData from '../../models/CarData';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await CarData.deleteMany();
  await Cars.deleteMany();
  await CarData.insertMany(data.carData);
  await Owner.insertMany(data.owner);
  await Cars.insertMany(data.cars);
  await db.disconnect();

  res.send({ message: 'Maníaco da Seed!' });
};

export default handler;
