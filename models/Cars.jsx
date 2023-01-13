import mongoose from 'mongoose';

const carsShema = new mongoose.Schema(
  {
    Ownername: { type: String, required: false },
    manufacturer: { type: String, required: false },
    model: { type: String, required: false },
    year: { type: String, required: false },
    registration: { type: String, required: false },
    odometer: { type: String, required: false },
    transmission: { type: String, required: false },
    fuel: { type: String, required: false },
    farol: {
      model: { type: String, required: false },
      buyDate: { type: String, required: false },
      location: { type: String, required: false },
    },
    tires: {
      model: { type: String, required: false },
      buyDate: { type: String, required: false },
      frontSize: { type: String, required: false },
      rearSize: { type: String, required: false },
      location: { type: String, required: false },
    },
    brakes: {
      model: { type: String, required: false },
      buyDate: { type: String, required: false },
      location: { type: String, required: false },
    },
    battery: {
      model: { type: String, required: false },
      buyDate: { type: String, required: false },
      location: { type: String, required: false },
    },
    oil: {
      model: { type: String, required: false },
      buyDate: { type: String, required: false },
      location: { type: String, required: false },
    },
  },
  {
    timestamps: true,
  },
);

const Cars = mongoose.models.Cars || mongoose.model('Cars', carsShema);

export default Cars;
