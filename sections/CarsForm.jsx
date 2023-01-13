'use client';

import React, { useEffect, useState } from 'react';
import { carsList } from '../constants';

const CarsForm = () => {
  const [cars, setCars] = useState('');
  const [Ownername, setOwnername] = useState('');
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
    const response = await fetch('/api/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
      }),
    });
    const result = await response.json();
    console.log(result);
  };
  const handleChange = (index, e) => {
    const newCarsList = [...carsList];
    newCarsList[index].value = e.target.value;
    const functions = {
      setOwnername,
      setManufacturer,
      setModel,
      setYear,
      setRegistration,
      setOdometer,
      setTransmission,
      setFuel,
      setFarolModel,
      setFarolBuyDate,
      setFarolLocation,
      setTiresModel,
      setTiresBuyDate,
      setTiresFrontSize,
      setTiresRearSize,
      setTiresLocation,
      setBrakesModel,
      setBrakesBuyDate,
      setBrakesLocation,
      setBatteryModel,
      setBatteryBuyDate,
      setBatteryLocation,
      setOilModel,
      setOilBuyDate,
      setOilLocation,
    };
    functions[newCarsList[index].setValue](newCarsList[index].value);
  };
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-5 form">
      {carsList.map((item, index) => (
        <label>
          {item.value}
          <input
            type="text"
            value={item.value}
            onChange={(e) => handleChange(index, e)}
          />
        </label>
      ))}
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarsForm;
