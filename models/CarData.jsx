import mongoose from 'mongoose';

const carShema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' },
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
    moreInformations: {
      maintenanceHistory: {
        maintenance1: {
          description: { type: String, required: false },
          date: { type: String, required: false },
          location: { type: String, required: false },
        },
        maintenance2: {
          description: { type: String, required: false },
          date: { type: String, required: false },
          location: { type: String, required: false },
        },
      },
      insurance: {
        company: { type: String, required: false },
        policyNumber: { type: String, required: false },
        expirationDate: { type: String, required: false },
      },
      warranty: {
        provider: { type: String, required: false },
        terms: { type: String, required: false },
        expirationDate: { type: String, required: false },
      },
      licensing: {
        expirationDate: { type: String, required: false },
        licenseNumber: { type: String, required: false },
        state: { type: String, required: false },
      },
      performance: {
        maxSpeed: { type: String, required: false },
        fuelEfficiency: { type: String, required: false },
      },
    },
  },
  {
    timestamps: true,
  },
);

const CarData = mongoose.models.CarData || mongoose.model('CarData', carShema);

export default CarData;
