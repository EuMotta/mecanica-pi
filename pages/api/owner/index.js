import Owner from '../../../models/Owner';
import db from '../../../utils/db';

const postHandler = async (req, res) => {
  await db.connect();
  const newOwner = new Owner({
    name: 'aa',
    lastName: 'a',
    address: 'a',
    email: 'a',
    phone: 'a',
    birthdate: '05/11/1999',
    gender: 'a',
    cpf: 'a',
    city: 'a',
    state: 'a',
    cep: 'a',
    extraPhone: 'a',
  });
  const owner = await newOwner.save();
  await db.disconnect();
  res.send({ message: 'owner added successfully!', owner });
};

const getHandler = async (req, res) => {
  await db.connect();
  const owner = await Owner.find({});
  await db.disconnect();
  res.send(owner);
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
