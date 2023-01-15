'use client';

import React, { useEffect, useState } from 'react';
import styles from '../styles';

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
    console.log(result);
    console.log(cars);
  };
  return (
    <form onSubmit={handleSubmit} className={`${styles.paddings} form`}>
      <div className="grid grid-cols-2">
        <div className="glassmorphism p-5">
          <h2 className="text-center">Informações iniciais</h2>
          <div className="flex flex-wrap gap-5">
            <label>
              <div className="">Nome do proprietario:</div>
              <input
                type="text"
                value={Ownername}
                onChange={(e) => setOwnername(e.target.value)}
              />
            </label>
            <label>
              <div className="">Fabricante:</div>
              <select
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
                className="shadow-sm bg-aliceblue cursor-pointer border-2 border-slate-500 rounded"
              >
                <option value="" disabled>
                  Selecione a Fabricante
                </option>
                <option value="Wolkswagen">Wolkswagen</option>
                <option value="Toyota">Toyota</option>
                <option value="Ford">Ford</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Fiat">Fiat</option>
                <option value="Honda">Honda</option>
                <option value="Jeep">Jeep</option>
                <option value="Kia">Kia</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Nissan">Nissan</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Renault">Renault</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Citroen">Citroen</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Audi">Audi</option>
                <option value="Porsche">Porsche</option>
                <option value="Jeep">Jeep</option>
                <option value="Scania">Scania</option>
                <option value="Scania">JAC Motors</option>
              </select>
            </label>
            <label>
              <div className="">Modelo:</div>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </label>
            <label>
              <div className="">Ano:</div>
              <input
                type="text"
                value={year}
                onInput={(e) => setYear(e.target.value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3'))}
                maxLength="10"
                title="Data inválida, insira no formato DD/MM/AAAA"
                placeholder="__/__/____"
                required
              />
            </label>
            <label>
              <div className="">Renavam:</div>
              <input
                type="text"
                value={registration}
                onChange={(e) => setRegistration(e.target.value)}
                maxLength="11"
              />
            </label>
          </div>
        </div>
        <div className="glassmorphism p-5 gap-2 ">
          <div className="flex flex-wrap">
            <h2 className="text-center">Informações veiculares:</h2>
            <label>
              <div className="">Odometro:</div>
              <input
                type="text"
                value={odometer}
                onChange={(e) => setOdometer(e.target.value)}
                maxLength="6"
              />
            </label>
            <label>
              <div className="">Transmissão:</div>
              <input
                type="text"
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
              />
            </label>
            <label>
              <div className="">Tipo de Combustivel:</div>
              <input
                type="text"
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="glassmorphism p-5 col-span-2">
          <h2 className="text-center">Fabricante:</h2>
          <div className="flex flex-wrap">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="border p-5">
                <h3 className="text-center">farol</h3>
                <label>
                  <div>Modelo do farol:</div>
                  <input
                    type="text"
                    value={farolModel}
                    onChange={(e) => setFarolModel(e.target.value)}
                  />
                </label>
                <label>
                  <div>Data de compra:</div>
                  <input
                    type="text"
                    value={farolBuyDate}
                    onChange={(e) => setFarolBuyDate(e.target.value)}
                  />
                </label>
                <label>
                  <div>Local de compra:</div>
                  <input
                    type="text"
                    value={farolLocation}
                    onChange={(e) => setFarolLocation(e.target.value)}
                  />
                </label>
              </div>
              <div className="border p-5">
                <h3 className="text-center">Rodas</h3>
                <label>
                  <div>Modelo da roda:</div>
                  <input
                    type="text"
                    value={tiresModel}
                    onChange={(e) => setTiresModel(e.target.value)}
                  />
                </label>
                <label>
                  <div>Data de compra:</div>
                  <input
                    type="text"
                    value={tiresBuyDate}
                    onChange={(e) => setTiresBuyDate(e.target.value)}
                  />
                </label>
                <label>
                  <div>Tamanho frontal:</div>
                  <input
                    type="text"
                    value={tiresFrontSize}
                    onChange={(e) => setTiresFrontSize(e.target.value)}
                  />
                </label>
                <label>
                  <div>Tamanho traseiro:</div>
                  <input
                    type="text"
                    value={tiresRearSize}
                    onChange={(e) => setTiresRearSize(e.target.value)}
                  />
                </label>
                <label>
                  <div>Local de compra:</div>
                  <input
                    type="text"
                    value={tiresLocation}
                    onChange={(e) => setTiresLocation(e.target.value)}
                  />
                </label>
              </div>
              <div className="border p-5">
                <h3>Freios e bateria:</h3>
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
              </div>
              <div className="border p-5">
                <h3 className="text-center">Óleo:</h3>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarsForm;
