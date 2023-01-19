import mongoose from 'mongoose';

const ownerSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    lastName: { type: String, required: false },
    address: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    birthdate: { type: Date, required: false },
    gender: { type: String, required: false },
    cpf: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    cep: { type: String, required: false },
    extraPhone: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);

const Owner = mongoose.models.Owner || mongoose.model('Owner', ownerSchema);

export default Owner;
