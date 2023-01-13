import Cars from '../../models/Cars';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await Cars.deleteMany();
  await Cars.insertMany(data.cars);
  await db.disconnect();

  res.send({ message: 'Maníaco da Seed!' });
};

export default handler;
