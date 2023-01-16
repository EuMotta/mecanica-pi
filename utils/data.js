module.exports = {
  cars: [
    {
      owner: {
        name: 'a',
        lastName: 'a',
        address: 'a',
        email: 'a',
        phone: 'a',
      },
      car: {
        Ownername: 'José Antonio',
        manufacturer: 'Wolkswagen',
        model: 'Golf',
        year: '2020',
        registration: 'ABC-1234',
        odometer: '15000',
        transmission: 'Manual',
        fuel: 'Gasoline',
        farol: {
          model: 'H11',
          buyDate: '01/01/2022',
          location: 'Mario',
        },
        tires: {
          model: 'Michelin',
          buyDate: '01/01/2022',
          frontSize: '225/45 R17',
          rearSize: '225/45 R17',
          location: 'Mario',
        },
        brakes: {
          model: 'Akebono',
          buyDate: '01/01/2022',
          location: 'Mario',
        },
        battery: {
          model: 'Exide',
          buyDate: '01/01/2022',
          location: 'Mario',
        },
        oil: {
          model: 'Castrol',
          buyDate: '01/01/2022',
          location: 'Mario',
        },
        moreInformations: {
          maintenanceHistory: {
            maintenance1: {
              description: 'Oil change',
              date: '01/01/2022',
              location: 'Mario',
            },
            maintenance2: {
              description: 'Oil change',
              date: '01/01/2022',
              location: 'Mario',
            },
          },
          insurance: {
            company: 'ABC Seguros',
            policyNumber: '1234',
            expirationDate: '01/01/2023',
          },
          warranty: {
            provider: 'Wolkswagen',
            terms: '3 years or 60,000 miles',
            expirationDate: '01/01/2025',
          },
          licensing: {
            expirationDate: '01/01/2023',
            licenseNumber: '1234',
            state: 'TX',
          },
          performance: {
            maxSpeed: '120 mph',
            fuelEfficiency: '30 mpg',
          },
        },
      },
    },
  ],
};
