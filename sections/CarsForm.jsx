'use client';

import React, { useEffect, useState } from 'react';

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
    const response = await fetch(`/api/cars/${e}`, {
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
    console.log(farolModel);
    console.log(result);
    console.log(cars);
  };
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-5 form">
      <label>
        Ownername:
        <input
          type="text"
          value={Ownername}
          onChange={(e) => setOwnername(e.target.value)}
        />
      </label>
      <label>
        Manufacturer:
        <input
          type="text"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        />
      </label>
      <label>
        Model:
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </label>
      <label>
        Year:
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </label>
      <label>
        Registration:
        <input
          type="text"
          value={registration}
          onChange={(e) => setRegistration(e.target.value)}
        />
      </label>
      <label>
        Odometer:
        <input
          type="text"
          value={odometer}
          onChange={(e) => setOdometer(e.target.value)}
        />
      </label>
      <label>
        Transmission:
        <input
          type="text"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        />
      </label>
      <label>
        Fuel:
        <input
          type="text"
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Farol Model:
        <input
          type="text"
          value={farolModel}
          onChange={(e) => setFarolModel(e.target.value)}
        />
      </label>
      <label>
        Farol Buy Date:
        <input
          type="text"
          value={farolBuyDate}
          onChange={(e) => setFarolBuyDate(e.target.value)}
        />
      </label>
      <label>
        Farol Location:
        <input
          type="text"
          value={farolLocation}
          onChange={(e) => setFarolLocation(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Tires Model:
        <input
          type="text"
          value={tiresModel}
          onChange={(e) => setTiresModel(e.target.value)}
        />
      </label>
      <label>
        Tires Buy Date:
        <input
          type="text"
          value={tiresBuyDate}
          onChange={(e) => setTiresBuyDate(e.target.value)}
        />
      </label>
      <label>
        Tires Front Size:
        <input
          type="text"
          value={tiresFrontSize}
          onChange={(e) => setTiresFrontSize(e.target.value)}
        />
      </label>
      <label>
        Tires Rear Size:
        <input
          type="text"
          value={tiresRearSize}
          onChange={(e) => setTiresRearSize(e.target.value)}
        />
      </label>
      <label>
        Tires Location:
        <input
          type="text"
          value={tiresLocation}
          onChange={(e) => setTiresLocation(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Brakes Model:
        <input
          type="text"
          value={brakesModel}
          onChange={(e) => setBrakesModel(e.target.value)}
        />
      </label>
      <label>
        Brakes Buy Date:
        <input
          type="text"
          value={brakesBuyDate}
          onChange={(e) => setBrakesBuyDate(e.target.value)}
        />
      </label>
      <label>
        Brakes Location:
        <input
          type="text"
          value={brakesLocation}
          onChange={(e) => setBrakesLocation(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Battery Model:
        <input
          type="text"
          value={batteryModel}
          onChange={(e) => setBatteryModel(e.target.value)}
        />
      </label>
      <label>
        Battery Buy Date:
        <input
          type="text"
          value={batteryBuyDate}
          onChange={(e) => setBatteryBuyDate(e.target.value)}
        />
      </label>
      <label>
        Battery Location:
        <input
          type="text"
          value={batteryLocation}
          onChange={(e) => setBatteryLocation(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Oil Model:
        <input
          type="text"
          value={oilModel}
          onChange={(e) => setOilModel(e.target.value)}
        />
      </label>
      <label>
        Oil Buy Date:
        <input
          type="text"
          value={oilBuyDate}
          onChange={(e) => setOilBuyDate(e.target.value)}
        />
      </label>
      <label>
        Oil Location:
        <input
          type="text"
          value={oilLocation}
          onChange={(e) => setOilLocation(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarsForm;
