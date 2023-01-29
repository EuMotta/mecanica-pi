import Owner from '../../../../models/Owner';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  const newOwner = new Owner({
    name: req.body.name,
    lastName: req.body.lastName,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
    birthdate: req.body.birthdate,
    gender: req.body.gender,
    cpf: req.body.cpf,
    city: req.body.city,
    state: req.body.state,
    cep: req.body.cep,
    extraPhone: req.body.extraPhone,
  });
  const owner = await newOwner.save();
  await db.disconnect();
  res.send({ message: 'owner added successfully!', owner });
};

export default handler;
