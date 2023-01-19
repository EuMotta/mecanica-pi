import Cars from '../../../../models/Cars';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  const newCar = new Cars({
    owner: {
      name: req.body.owner.name,
      lastName: req.body.owner.lastName,
      address: req.body.owner.address,
      email: req.body.owner.email,
      phone: req.body.owner.phone,
      birthdate: req.body.owner.phone,
      gender: req.body.owner.phone,
      cpf: req.body.owner.cpf,
      city: req.body.owner.city,
      state: req.body.owner.state,
      cep: req.body.owner.cep,
      extraPhone: req.body.owner.extraPhone,
    },
    car: {
      Ownername: req.body.car.Ownername,
      manufacturer: req.body.car.manufacturer,
      model: req.body.car.model,
      year: req.body.car.year,
      registration: req.body.car.registration,
      odometer: req.body.car.odometer,
      transmission: req.body.car.transmission,
      fuel: req.body.car.fuel,
      farol: {
        model: req.body.car.farol.model,
        buyDate: req.body.car.farol.buyDate,
        location: req.body.car.farol.location,
      },
      tires: {
        model: req.body.car.tires.model,
        buyDate: req.body.car.tires.buyDate,
        frontSize: req.body.car.tires.frontSize,
        rearSize: req.body.car.tires.rearSize,
        location: req.body.car.tires.location,
      },
      brakes: {
        model: req.body.car.brakes.model,
        buyDate: req.body.car.brakes.buyDate,
        location: req.body.car.brakes.location,
      },
      battery: {
        model: req.body.car.battery.model,
        buyDate: req.body.car.battery.buyDate,
        location: req.body.car.battery.location,
      },
      oil: {
        model: req.body.car.oil.model,
        buyDate: req.body.car.oil.buyDate,
        location: req.body.car.oil.location,
      },
      moreInformations: {
        maintenanceHistory: {
          maintenance1: {
            description: req.body.car.moreInformations.maintenanceHistory.maintenance1.description,
            date: req.body.car.moreInformations.maintenanceHistory.maintenance1.date,
            location: req.body.car.moreInformations.maintenanceHistory.maintenance1.location,
          },
          maintenance2: {
            description: req.body.car.moreInformations.maintenanceHistory.maintenance2.description,
            date: req.body.car.moreInformations.maintenanceHistory.maintenance2.date,
            location: req.body.car.moreInformations.maintenanceHistory.maintenance2.location,
          },
        },
        insurance: {
          company: req.body.car.moreInformations.insurance.company,
          policyNumber: req.body.car.moreInformations.insurance.policyNumber,
          expirationDate: req.body.car.moreInformations.insurance.expirationDate,
        },
        warranty: {
          provider: req.body.car.moreInformations.warranty.provider,
          terms: req.body.car.moreInformations.warranty.terms,
          expirationDate: req.body.car.moreInformations.warranty.expirationDate,
        },
        licensing: {
          expirationDate: req.body.car.moreInformations.licensing.expirationDate,
          licenseNumber: req.body.car.moreInformations.licensing.licenseNumber,
          state: req.body.car.moreInformations.licensing.state,
        },
        performance: {
          maxSpeed: req.body.car.moreInformations.performance.maxSpeed,
          fuelEfficiency: req.body.car.moreInformations.performance.fuelEfficiency,
        },
      },
    },
  });
  const cars = await newCar.save();
  await db.disconnect();
  res.send({ message: '500 added successfully!', cars });
};

export default handler;
