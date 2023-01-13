import mongoose from 'mongoose';

const carsShema = new mongoose.Schema(
  {
    Ownername: { type: String, required: true },
    manufacturer: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    registration: { type: String, required: true },
    odometer: { type: String, required: true },
    transmission: { type: String, required: true },
    fuel: { type: String, required: true },
    farol: {
      model: { type: String, required: true },
      buyDate: { type: Date, required: true },
      location: { type: String, required: true },
    },
    tires: {
      model: { type: String, required: true },
      buyDate: { type: Date, required: true },
      frontSize: { type: String, required: true },
      rearSize: { type: String, required: true },
      location: { type: String, required: true },
    },
    brakes: {
      model: { type: String, required: true },
      buyDate: { type: Date, required: true },
      location: { type: String, required: true },
    },
    battery: {
      model: { type: String, required: true },
      buyDate: { type: Date, required: true },
      location: { type: String, required: true },
    },
    oil: {
      model: { type: String, required: true },
      buyDate: { type: Date, required: true },
      location: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  },
);

const Cars = mongoose.models.Cars || mongoose.model('Cars', carsShema);

export default Cars;
