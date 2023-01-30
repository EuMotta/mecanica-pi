'use client';

import React, { useEffect, useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import styles from '../../styles';

const CarsForm = () => {
  const [owner, setOwner] = useState('');
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
  const [performanceFuelEfficiency, setPerformanceFuelEfficiency] =
    useState('');
  const [ownersData, setOwnerData] = useState([]);
  const [showM1, setShowM1] = useState(false);
  const [showM2, setShowM2] = useState(false);
  const [showSecure, setShowSecure] = useState(false);
  const [showWarranty, setShowWarranty] = useState(false);
  const [showLicense, setShowLicense] = useState(false);
  const [showFarol, setShowFarol] = useState(false);
  const [showTires, setShowTires] = useState(false);
  const [showBreaks, setShowBreaks] = useState(false);
  const [showBatteries, setShowBatteries] = useState(false);
  const [showOil, setShowOil] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/owner');
      const data = await result.json();
      setOwnerData(data);
    };
    fetchData();
  }, []);
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
    const response = await fetch(`/api/car/${e}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        car: {
          owner,
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
      name: 'ID do dono:',
      type: 'select',
      value: 'owner',
      onChange: (e) => setOwner(e.target.value),
      options: [],
    },
    {
      name: 'Nome do proprietario do carro:',
      type: 'text',
      onChange: (e) => setOwnername(e.target.value),
    },
    {
      name: 'Fabricante:',
      type: 'select',
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
      onChange: (e) => setModel(e.target.value),
    },
    {
      name: 'Ano:',
      type: 'text',
      onChange: (e) => setYear(e.target.value),
      maxLength: '10',
      title: 'Data inválida, insira no formato DD/MM/AAAA',
      placeholder: '__/__/____',
    },
    {
      name: 'Renavam:',
      type: 'text',
      onChange: (e) => setRegistration(e.target.value),
      maxLength: '11',
    },
    {
      name: 'Odometro:',
      type: 'text',
      onChange: (e) => setOdometer(e.target.value),
    },
    {
      name: 'Transmissão:',
      type: 'text',
      onChange: (e) => setTransmission(e.target.value),
    },
    {
      name: 'Combustível:',
      type: 'text',
      onChange: (e) => setFuel(e.target.value),
    },
    {
      name: 'Modelo do Farol:',
      type: 'text',
      onChange: (e) => setFarolModel(e.target.value),
    },
    {
      name: 'Data de compra do farol:',
      type: 'text',
      onChange: (e) => setFarolBuyDate(e.target.value),
    },
    {
      name: 'Local de compra do farol:',
      type: 'text',
      onChange: (e) => setFarolLocation(e.target.value),
    },
    {
      name: 'Modelo da roda:',
      type: 'text',
      onChange: (e) => setTiresModel(e.target.value),
    },
    {
      name: 'Data de compra da roda:',
      type: 'text',
      onChange: (e) => setTiresBuyDate(e.target.value),
    },
    {
      name: 'Tamanho da roda frontal:',
      type: 'text',
      onChange: (e) => setTiresFrontSize(e.target.value),
    },
    {
      name: 'Tamanho da roda traseira:',
      type: 'text',
      onChange: (e) => setTiresRearSize(e.target.value),
    },
    {
      name: 'Local de compra das rodas:',
      type: 'text',
      onChange: (e) => setTiresLocation(e.target.value),
    },
    {
      name: 'Modelo do freio:',
      type: 'text',
      onChange: (e) => setBrakesModel(e.target.value),
    },
    {
      name: 'Data de compra do freio:',
      type: 'text',
      onChange: (e) => setBrakesBuyDate(e.target.value),
    },
    {
      name: 'Local de compra do freio:',
      type: 'text',
      onChange: (e) => setBrakesLocation(e.target.value),
    },
    {
      name: 'Modelo da bateria:',
      type: 'text',
      onChange: (e) => setBatteryModel(e.target.value),
    },
    {
      name: 'Data de compra da bateria:',
      type: 'text',
      onChange: (e) => setBatteryBuyDate(e.target.value),
    },
    {
      name: 'Local de compra da bateria:',
      type: 'text',
      onChange: (e) => setBatteryLocation(e.target.value),
    },
    {
      name: 'Modelo do óleo:',
      type: 'text',
      onChange: (e) => setOilModel(e.target.value),
    },
    {
      name: 'Data de compra do óleo:',
      type: 'text',
      onChange: (e) => setOilBuyDate(e.target.value),
    },
    {
      name: 'Local de compra do óleo:',
      type: 'text',
      onChange: (e) => setOilLocation(e.target.value),
    },
    {
      name: 'Manutenção 1 descrição:',
      type: 'text',
      onChange: (e) => setMaintenance1Description(e.target.value),
    },
    {
      name: 'Manutenção 1 data:',
      type: 'text',
      onChange: (e) => setMaintenance1Date(e.target.value),
    },
    {
      name: 'Manutenção 1 local:',
      type: 'text',
      onChange: (e) => setMaintenance1Location(e.target.value),
    },
    {
      name: 'Manutenção 2 descrição:',
      type: 'text',
      onChange: (e) => setMaintenance2Description(e.target.value),
    },
    {
      name: 'Manutenção 2 data:',
      type: 'text',
      onChange: (e) => setmaintenance2Date(e.target.value),
    },
    {
      name: 'Manutenção 2 local:',
      type: 'text',
      onChange: (e) => setMaintenance2Location(e.target.value),
    },
    {
      name: 'Empresa do seguro:',
      type: 'text',
      onChange: (e) => setInsuranceCompany(e.target.value),
    },
    {
      name: 'Codigo do seguro:',
      type: 'text',
      onChange: (e) => setInsurancePolicyNumber(e.target.value),
    },
    {
      name: 'Data de validade:',
      type: 'text',
      onChange: (e) => setInsuranceExpirationDate(e.target.value),
    },
    {
      name: 'Fornecedor da Garantia:',
      type: 'text',
      onChange: (e) => setWarrantyProvider(e.target.value),
    },
    {
      name: 'Termos da Garantia:',
      type: 'text',
      onChange: (e) => setWarrantyTerms(e.target.value),
    },
    {
      name: 'Data de expiração da Garantia:',
      type: 'text',
      onChange: (e) => setWarrantyExpirationDate(e.target.value),
    },
    {
      name: 'Numero da Licensa:',
      type: 'text',
      onChange: (e) => setLicensingLicenseNumber(e.target.value),
    },
    {
      name: 'Data de expiração da Licensa:',
      type: 'text',
      onChange: (e) => setLicenseExpirationDate(e.target.value),
    },
    {
      name: 'Estado da Licensa:',
      type: 'text',
      onChange: (e) => setLicensingState(e.target.value),
    },
    {
      name: 'Velocidade máxima:',
      type: 'text',
      onChange: (e) => setPerformanceMaxSpeed(e.target.value),
    },
    {
      name: 'Eficiencia do combustivel:',
      type: 'text',
      onChange: (e) => setPerformanceFuelEfficiency(e.target.value),
    },
  ];
  return (
    <form onSubmit={handleSubmit} className={`${styles.yPaddings} form`}>
      {ownersData.map((ownerid) => (
        <div key={ownerid._id} className="">
          {ownerid._id}
        </div>
      ))}
      <div className="glassmorphism p-4 grid grid-cols-3 gap-x-10">
        <div className="col-span-3 text-center p-5">
          <h2>Informações essenciais</h2>
        </div>
        {formItems.slice(0, 5).map((item, index) => (
          <label key={index}>
            <div className="">{item.name}</div>
            {item.type === 'select' ? (
              item.value === 'owner' ? (
                <select
                  onChange={item.onChange}
                  className="shadow-sm bg-aliceblue cursor-pointer border-2 border-slate-500 rounded"
                  required
                >
                  <option value=""> </option>
                  {ownersData.map((option, i) => (
                    <option key={i} value={option._id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              ) : (
                <select
                  onChange={item.onChange}
                  className="shadow-sm bg-aliceblue cursor-pointer border-2 border-slate-500 rounded"
                >
                  {item.options.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )
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
      <div className="glassmorphismp-5 gap-10">
        <div className="col-span-2 text-center p-5">
          <h2>Informações do veiculo</h2>
        </div>
        <div className="border grid  grid-cols-3 gap-x-10  bg-slate-300 rounded-lg shadow shadow-slate-600 p-2">
          <div className="col-span-3 text-center p-5">
            <h4>Principais</h4>
          </div>
          {formItems.slice(5, 9).map((item, index) => (
            <label key={index}>
              <div className="">{item.name}</div>
              {item.type === 'select' ? (
                <select
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
      </div>
      <div className="glassmorphism grid  grid-cols-3 p-5 gap-10">
        <div className="col-span-3 text-center p-5">
          <h2>Informações complementares</h2>
        </div>
        <div className="border bg-slate-300 rounded-lg shadow shadow-slate-600 p-2">
          <div className="col-span-3 flex justify-center items-center gap-3 text-center p-5">
            <h4>Manutenção 1</h4>
            <div className="relative ">
              <input
                type="checkbox"
                className="absolute opacity-0"
                checked={showM1}
                onChange={() => setShowM1(!showM1)}
                id="Manutenção1"
              />
              <label
                htmlFor="Manutenção1"
                className="relative text-center text-3xl"
              >
                {showM1 ? (
                  <MdCheckBox className=" text-green-600 text-2xl" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-2xl" />
                )}
              </label>
            </div>
          </div>
          {showM1 &&
            formItems.slice(26, 29).map((item, index) => (
              <label key={index}>
                <div className="">{item.name}</div>
                {item.type === 'select' ? (
                  <select
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
          <div className="col-span-3 flex justify-center items-center gap-3 text-center p-5">
            <h4>Manutenção 2</h4>
            <div className="relative ">
              <input
                type="checkbox"
                className="absolute opacity-0"
                checked={showM2}
                onChange={() => setShowM2(!showM2)}
                id="Manutenção2"
              />
              <label
                htmlFor="Manutenção2"
                className="relative text-center text-3xl"
              >
                {showM2 ? (
                  <MdCheckBox className=" text-green-600 text-2xl" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-2xl" />
                )}
              </label>
            </div>
          </div>
          {showM2 &&
            formItems.slice(29, 32).map((item, index) => (
              <label key={index}>
                <div className="">{item.name}</div>
                {item.type === 'select' ? (
                  <select
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
        <div className="border bg-slate-300 rounded-lg shadow shadow-slate-600 p-2">
          <div className="col-span-3 flex justify-center items-center gap-3 text-center p-5">
            <h4>Seguro</h4>
            <div className="relative ">
              <input
                type="checkbox"
                className="absolute opacity-0"
                checked={showSecure}
                onChange={() => setShowSecure(!showSecure)}
                id="showSecure"
              />
              <label
                htmlFor="showSecure"
                className="relative text-center text-3xl"
              >
                {showSecure ? (
                  <MdCheckBox className=" text-green-600 text-2xl" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-2xl" />
                )}
              </label>
            </div>
          </div>
          {showSecure && formItems.slice(32, 35).map((item, index) => (
              <label key={index}>
                <div className="">{item.name}</div>
                {item.type === 'select' ? (
                  <select
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
          <div className="col-span-3 flex justify-center items-center gap-3 text-center p-5">
            <h4>Garantia</h4>
            <div className="relative ">
              <input
                type="checkbox"
                className="absolute opacity-0"
                checked={showWarranty}
                onChange={() => setShowWarranty(!showWarranty)}
                id="showWarranty"
              />
              <label
                htmlFor="showWarranty"
                className="relative text-center text-3xl"
              >
                {showWarranty ? (
                  <MdCheckBox className=" text-green-600 text-2xl" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-2xl" />
                )}
              </label>
            </div>
          </div>
          {showWarranty &&
            formItems.slice(35, 38).map((item, index) => (
              <label key={index}>
                <div className="">{item.name}</div>
                {item.type === 'select' ? (
                  <select
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
        <div className="border bg-slate-300 rounded-lg shadow shadow-slate-600 p-2">
          <div className="col-span-3 flex justify-center items-center gap-3 text-center p-5">
            <h4>Licensa</h4>
            <div className="relative ">
              <input
                type="checkbox"
                className="absolute opacity-0"
                checked={showLicense}
                onChange={() => setShowLicense(!showLicense)}
                id="showLicense"
              />
              <label
                htmlFor="showLicense"
                className="relative text-center text-3xl"
              >
                {showLicense ? (
                  <MdCheckBox className=" text-green-600 text-2xl" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-2xl" />
                )}
              </label>
            </div>
          </div>
          {showLicense &&
            formItems.slice(38, 41).map((item, index) => (
              <label key={index}>
                <div className="">{item.name}</div>
                {item.type === 'select' ? (
                  <select
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
          <div className="col-span-3 text-center p-5">
            <h4>Eficiencia</h4>
          </div>
          {formItems.slice(41, 43).map((item, index) => (
            <label key={index}>
              <div className="">{item.name}</div>
              {item.type === 'select' ? (
                <select
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
      </div>
      <div className="glassmorphism p-5 grid grid-cols-3 gap-10">
        <div className="col-span-3 text-center p-5">
          <h2>Peças do veiculo</h2>
        </div>
        <div className="border bg-slate-300 rounded-lg shadow shadow-slate-600 p-2">
          <div className="col-span-3 flex justify-center items-center gap-3 text-center p-5">
            <h4>Farol</h4>
            <div className="relative ">
              <input
                type="checkbox"
                className="absolute opacity-0"
                checked={showFarol}
                onChange={() => setShowFarol(!showFarol)}
                id="showFarol"
              />
              <label
                htmlFor="showFarol"
                className="relative text-center text-3xl"
              >
                {showFarol ? (
                  <MdCheckBox className=" text-green-600 text-2xl" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-2xl" />
                )}
              </label>
            </div>
          </div>
          {showFarol &&
            formItems.slice(9, 12).map((item, index) => (
              <label key={index}>
                <div className="">{item.name}</div>
                <input
                  type={item.type}
                  onChange={item.onChange}
                  maxLength={item.maxLength}
                  title={item.title}
                  placeholder={item.placeholder}
                />
              </label>
            ))}
          <div className="col-span-3 flex justify-center items-center gap-3 text-center p-5">
            <h4>Rodas</h4>
            <div className="relative ">
              <input
                type="checkbox"
                className="absolute opacity-0"
                checked={showTires}
                onChange={() => setShowTires(!showTires)}
                id="showTires"
              />
              <label
                htmlFor="showTires"
                className="relative text-center text-3xl"
              >
                {showTires ? (
                  <MdCheckBox className=" text-green-600 text-2xl" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-2xl" />
                )}
              </label>
            </div>
          </div>
          {showTires &&
            formItems.slice(12, 17).map((item, index) => (
              <label key={index}>
                <div className="">{item.name}</div>
                <input
                  type={item.type}
                  onChange={item.onChange}
                  maxLength={item.maxLength}
                  title={item.title}
                  placeholder={item.placeholder}
                />
              </label>
            ))}
        </div>
        <div className="border bg-slate-300 rounded-lg shadow shadow-slate-600 p-2">
          <div className="col-span-3 flex justify-center items-center gap-3 text-center p-5">
            <h4>Freio</h4>
            <div className="relative ">
              <input
                type="checkbox"
                className="absolute opacity-0"
                checked={showBreaks}
                onChange={() => setShowBreaks(!showBreaks)}
                id="showBreaks"
              />
              <label
                htmlFor="showBreaks"
                className="relative text-center text-3xl"
              >
                {showBreaks ? (
                  <MdCheckBox className=" text-green-600 text-2xl" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-2xl" />
                )}
              </label>
            </div>
          </div>
          {showBreaks &&
            formItems.slice(17, 20).map((item, index) => (
              <label key={index}>
                <div className="">{item.name}</div>
                <input
                  type={item.type}
                  onChange={item.onChange}
                  maxLength={item.maxLength}
                  title={item.title}
                  placeholder={item.placeholder}
                />
              </label>
            ))}
          <div className="col-span-3 flex justify-center items-center gap-3 text-center p-5">
            <h4>Bateria</h4>
            <div className="relative ">
              <input
                type="checkbox"
                className="absolute opacity-0"
                checked={showBatteries}
                onChange={() => setShowBatteries(!showBatteries)}
                id="showBatteries"
              />
              <label
                htmlFor="showBatteries"
                className="relative text-center text-3xl"
              >
                {showBatteries ? (
                  <MdCheckBox className=" text-green-600 text-2xl" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-2xl" />
                )}
              </label>
            </div>
          </div>
          {showBatteries &&
            formItems.slice(20, 23).map((item, index) => (
              <label key={index}>
                <div className="">{item.name}</div>
                <input
                  type={item.type}
                  onChange={item.onChange}
                  maxLength={item.maxLength}
                  title={item.title}
                  placeholder={item.placeholder}
                />
              </label>
            ))}
        </div>
        <div className="border bg-slate-300 rounded-lg shadow shadow-slate-600 p-2">
          <div className="col-span-3 flex justify-center items-center gap-3 text-center p-5">
            <h4>Oleo</h4>
            <div className="relative ">
              <input
                type="checkbox"
                className="absolute opacity-0"
                checked={showOil}
                onChange={() => setShowOil(!showOil)}
                id="showOil"
              />
              <label
                htmlFor="showOil"
                className="relative text-center text-3xl"
              >
                {showOil ? (
                  <MdCheckBox className=" text-green-600 text-2xl" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-2xl" />
                )}
              </label>
            </div>
          </div>
          {showOil && formItems.slice(23, 26).map((item, index) => (
            <label key={index}>
              <div className="">{item.name}</div>
              <input
                type={item.type}
                onChange={item.onChange}
                maxLength={item.maxLength}
                title={item.title}
                placeholder={item.placeholder}
              />
            </label>
          ))}
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarsForm;
