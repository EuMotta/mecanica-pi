'use client';

import React, { useEffect, useState } from 'react';
import styles from '../styles';

const CarsForm = () => {
  const [cars, setCars] = useState('');
  const [Ownername, setOwnername] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerLastName, setOwnerLastName] = useState('');
  const [ownerAddress, setOwnerAddress] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [registration, setRegistration] = useState('');
  const [odometer, setOdometer] = useState('');
  const [transmission, setTransmission] = useState('');
  const [fuel, setFuel] = useState('');
  const [farolModel, setFarolModel] = useState('');
  const [farolBuyDate, setFarolBuyDate] = useState('');
  const [farolLocation, setFarolLocation] = useState('');
  const [tiresModel, setTiresModel] = useState('');
  const [tiresBuyDate, setTiresBuyDate] = useState('');
  const [tiresFrontSize, setTiresFrontSize] = useState('');
  const [tiresRearSize, setTiresRearSize] = useState('');
  const [tiresLocation, setTiresLocation] = useState('');
  const [brakesModel, setBrakesModel] = useState('');
  const [brakesBuyDate, setBrakesBuyDate] = useState('');
  const [brakesLocation, setBrakesLocation] = useState('');
  const [batteryModel, setBatteryModel] = useState('');
  const [batteryBuyDate, setBatteryBuyDate] = useState('');
  const [batteryLocation, setBatteryLocation] = useState('');
  const [oilModel, setOilModel] = useState('');
  const [oilBuyDate, setOilBuyDate] = useState('');
  const [oilLocation, setOilLocation] = useState('');
  const [maintenance1Description, setMaintenance1Description] = useState('');
  const [maintenance1Date, setMaintenance1Date] = useState('');
  const [maintenance1Location, setMaintenance1Location] = useState('');
  const [maintenance2Description, setMaintenance2Description] = useState('');
  const [maintenance2Date, setmaintenance2Date] = useState('');
  const [maintenance2Location, setMaintenance2Location] = useState('');
  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState('');
  const [insuranceExpirationDate, setInsuranceExpirationDate] = useState('');
  const [warrantyProvider, setWarrantyProvider] = useState('');
  const [warrantyTerms, setWarrantyTerms] = useState('');
  const [warrantyExpirationDate, setWarrantyExpirationDate] = useState('');
  const [licenseExpirationDate, setLicenseExpirationDate] = useState('');
  const [licensingLicenseNumber, setLicensingLicenseNumber] = useState('');
  const [licensingState, setLicensingState] = useState('');
  const [performanceMaxSpeed, setPerformanceMaxSpeed] = useState('');
  const [performanceFuelEfficiency, setPerformanceFuelEfficiency] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/cars');
      const data = await result.json();
      setCars(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/cars/${e}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        owner: {
          name: ownerName,
          lastName: ownerLastName,
          address: ownerAddress,
          email: ownerEmail,
          phone: ownerPhone,
        },
        car: {
          Ownername,
          manufacturer,
          model,
          year,
          registration,
          odometer,
          transmission,
          fuel,
          farol: {
            model: farolModel,
            buyDate: farolBuyDate,
            location: farolLocation,
          },
          tires: {
            model: tiresModel,
            buyDate: tiresBuyDate,
            frontSize: tiresFrontSize,
            rearSize: tiresRearSize,
            location: tiresLocation,
          },
          brakes: {
            model: brakesModel,
            buyDate: brakesBuyDate,
            location: brakesLocation,
          },
          battery: {
            model: batteryModel,
            buyDate: batteryBuyDate,
            location: batteryLocation,
          },
          oil: {
            model: oilModel,
            buyDate: oilBuyDate,
            location: oilLocation,
          },
          moreInformations: {
            maintenanceHistory: {
              maintenance1: {
                description: maintenance1Description,
                date: maintenance1Date,
                location: maintenance1Location,
              },
              maintenance2: {
                description: maintenance2Description,
                date: maintenance2Date,
                location: maintenance2Location,
              },
            },
            insurance: {
              company: insuranceCompany,
              policyNumber: insurancePolicyNumber,
              expirationDate: insuranceExpirationDate,
            },
            warranty: {
              provider: warrantyProvider,
              terms: warrantyTerms,
              expirationDate: warrantyExpirationDate,
            },
            licensing: {
              expirationDate: licenseExpirationDate,
              licenseNumber: licensingLicenseNumber,
              state: licensingState,
            },
            performance: {
              maxSpeed: performanceMaxSpeed,
              fuelEfficiency: performanceFuelEfficiency,
            },
          },
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    console.log(cars);
  };
  const formItems = [
    {
      name: 'Nome do proprietario:',
      type: 'text',
      value: model,
      onChange: (e) => setOwnername(e.target.value),
    },
    {
      name: 'Nome do proprietario:',
      type: 'text',
      value: model,
      onChange: (e) => setOwnerName(e.target.value),
    },
    {
      name: 'Nome do proprietario:',
      type: 'text',
      value: model,
      onChange: (e) => setOwnerLastName(e.target.value),
    },
    {
      name: 'Nome do proprietario:',
      type: 'text',
      value: model,
      onChange: (e) => setOwnerAddress(e.target.value),
    },
    {
      name: 'Nome do proprietario:',
      type: 'text',
      value: model,
      onChange: (e) => setOwnerEmail(e.target.value),
    },
    {
      name: 'Nome do proprietario:',
      type: 'text',
      value: model,
      onChange: (e) => setOwnerPhone(e.target.value),
    },
    {
      name: 'Fabricante:',
      type: 'select',
      value: manufacturer,
      onChange: (e) => setManufacturer(e.target.value),
      options: [
        { value: '', label: 'Selecione a Fabricante' },
        { value: 'Wolkswagen', label: 'Wolkswagen' },
        { value: 'Toyota', label: 'Toyota' },
        { value: 'Ford', label: 'Ford' },
        { value: 'Chevrolet', label: 'Chevrolet' },
        { value: 'Hyundai', label: 'Hyundai' },
        { value: 'Fiat', label: 'Fiat' },
        { value: 'Honda', label: 'Honda' },
        { value: 'Jeep', label: 'Jeep' },
        { value: 'Kia', label: 'Kia' },
        { value: 'Mitsubishi', label: 'Mitsubishi' },
        { value: 'Nissan', label: 'Nissan' },
        { value: 'Peugeot', label: 'Peugeot' },
        { value: 'Renault', label: 'Renault' },
        { value: 'Suzuki', label: 'Suzuki' },
        { value: 'Volkswagen', label: 'Volkswagen' },
        { value: 'Citroen', label: 'Citroen' },
        { value: 'BMW', label: 'BMW' },
        { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
        { value: 'Audi', label: 'Audi' },
        { value: 'Porsche', label: 'Porsche' },
        { value: 'Jeep', label: 'Jeep' },
        { value: 'Scania', label: 'Scania' },
        { value: 'JAC Motors', label: 'JAC Motors' },
      ],
    },
    {
      name: 'Modelo:',
      type: 'text',
      value: model,
      onChange: (e) => setModel(e.target.value),
    },
    {
      name: 'Ano:',
      type: 'text',
      value: year,
      onChange: (e) => setYear(e.target.value),
      maxLength: '10',
      title: 'Data inválida, insira no formato DD/MM/AAAA',
      placeholder: '__/__/____',
    },
    {
      name: 'Renavam:',
      type: 'text',
      value: registration,
      onChange: (e) => setRegistration(e.target.value),
      maxLength: '11',
    },
    {
      name: 'Odometro:',
      type: 'text',
      value: odometer,
      onChange: (e) => setOdometer(e.target.value),
    },
    {
      name: 'Transmissão:',
      type: 'text',
      value: transmission,
      onChange: (e) => setTransmission(e.target.value),
    },
    {
      name: 'Combustível:',
      type: 'text',
      value: fuel,
      onChange: (e) => setFuel(e.target.value),
    },
    {
      name: 'Modelo do Farol:',
      type: 'text',
      value: fuel,
      onChange: (e) => setFarolModel(e.target.value),
    },
    {
      name: 'Data de compra do farol:',
      type: 'text',
      value: fuel,
      onChange: (e) => setFarolBuyDate(e.target.value),
    },
    {
      name: 'Local de compra do farol:',
      type: 'text',
      value: fuel,
      onChange: (e) => setFarolLocation(e.target.value),
    },
    {
      name: 'Modelo da roda:',
      type: 'text',
      value: fuel,
      onChange: (e) => setTiresModel(e.target.value),
    },
    {
      name: 'Data de compra da roda:',
      type: 'text',
      value: fuel,
      onChange: (e) => setTiresBuyDate(e.target.value),
    },
    {
      name: 'Tamanho da roda frontal:',
      type: 'text',
      value: fuel,
      onChange: (e) => setTiresFrontSize(e.target.value),
    },
    {
      name: 'Tamanho da roda traseira:',
      type: 'text',
      value: fuel,
      onChange: (e) => setTiresRearSize(e.target.value),
    },
    {
      name: 'Local de compra das rodas:',
      type: 'text',
      value: fuel,
      onChange: (e) => setTiresLocation(e.target.value),
    },
    {
      name: 'Modelo do freio:',
      type: 'text',
      value: fuel,
      onChange: (e) => setBrakesModel(e.target.value),
    },
    {
      name: 'Data de compra do freio:',
      type: 'text',
      value: fuel,
      onChange: (e) => setBrakesBuyDate(e.target.value),
    },
    {
      name: 'Local de compra do freio:',
      type: 'text',
      value: fuel,
      onChange: (e) => setBrakesLocation(e.target.value),
    },
    {
      name: 'Modelo da bateria:',
      type: 'text',
      value: fuel,
      onChange: (e) => setBatteryModel(e.target.value),
    },
    {
      name: 'Data de compra da bateria:',
      type: 'text',
      value: fuel,
      onChange: (e) => setBatteryBuyDate(e.target.value),
    },
    {
      name: 'Local de compra da bateria:',
      type: 'text',
      value: fuel,
      onChange: (e) => setBatteryLocation(e.target.value),
    },
    {
      name: 'Modelo do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setOilModel(e.target.value),
    },
    {
      name: 'Data de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setOilBuyDate(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setOilLocation(e.target.value),
    },
    {
      name: 'Manutenção 1 descrição:',
      type: 'text',
      value: fuel,
      onChange: (e) => setMaintenance1Description(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setMaintenance1Date(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setMaintenance1Location(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setMaintenance2Description(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setmaintenance2Date(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setMaintenance2Location(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setInsuranceCompany(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setInsurancePolicyNumber(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setInsuranceExpirationDate(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setWarrantyProvider(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setWarrantyTerms(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setWarrantyExpirationDate(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setLicenseExpirationDate(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setLicensingLicenseNumber(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setLicensingState(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setPerformanceMaxSpeed(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      value: fuel,
      onChange: (e) => setPerformanceFuelEfficiency(e.target.value),
    },
  ];
  return (
    <form onSubmit={handleSubmit} className={`${styles.yPaddings} form`}>
      <div className="glassmorphism p-5 grid grid-cols-2 gap-x-10">
        <div className="col-span-2 text-center p-5">
          <h2>Informações essenciais</h2>
        </div>
        {formItems.slice(0, 8).map((item, index) => (
          <label key={index}>
            <div className="">{item.name}</div>
            {item.type === 'select' ? (
              <select
                value={item.value}
                onChange={item.onChange}
                className="shadow-sm bg-aliceblue cursor-pointer border-2 border-slate-500 rounded"
              >
                {item.options.map((option, i) => (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={item.type}
                onChange={item.onChange}
                maxLength={item.maxLength}
                title={item.title}
                placeholder={item.placeholder}
              />
            )}
          </label>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarsForm;
