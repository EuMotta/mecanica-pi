import bcrypt from 'bcryptjs';

const data = {
  cars: [
    {
      owner: {
        name: 'a',
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
  owner: [
    {
      name: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      email: 'johndoe@example.com',
      phone: '555-555-5555',
      birthdate: '05/11/1999',
      gender: 'Male',
      cpf: '123.456.789-00',
      city: 'New York',
      state: 'NY',
      cep: '10005',
      extraPhone: '555-555-5556',
    },
    {
      name: 'Jane',
      lastName: 'Smith',
      address: '456 Park Ave',
      email: 'janesmith@example.com',
      phone: '555-555-5557',
      birthdate: '01/01/1995',
      gender: 'Female',
      cpf: '987.654.321-99',
      city: 'Los Angeles',
      state: 'CA',
      cep: '90001',
      extraPhone: '555-555-5558',
    },
  ],
  carData: [
    {
      owner: '63c94c64ba426116492a535b',
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
  ],
  user: [
    {
      name: 'Admin',
      lastName: 'Sobrenome',
      image: 'imagem',
      email: 'admin@example.com',
      password: bcrypt.hashSync('admin'),
      isAdmin: true,
    },
    {
      name: 'User',
      lastName: 'Sobrenome',
      image: 'imagem',
      email: 'user@example.com',
      password: bcrypt.hashSync('user'),
      isAdmin: false,
    },
  ],
};

export default data;
