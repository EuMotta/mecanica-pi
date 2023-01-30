'use client';

import React, { useEffect, useState } from 'react';
import styles from '../../styles';

const OwnersForm = () => {
  const [owner, setOwner] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerLastName, setOwnerLastName] = useState('');
  const [ownerAddress, setOwnerAddress] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [ownerbirthdate, setOwnerBirthdate] = useState('');
  const [ownerGender, setOwnerGender] = useState('');
  const [ownerCPF, setOwnerCPF] = useState('');
  const [ownerCity, setOwnerCity] = useState('');
  const [ownerState, setOwnerState] = useState('');
  const [ownerCEP, setOwnerCEP] = useState('');
  const [ownerExtraPhone, setOwnerExtraPhone] = useState('');
  const [ownersData, setOwnerData] = useState([]);

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
      const result = await fetch('/api/owner');
      const data = await result.json();
      setOwner(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/owner/${e}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: ownerName,
        lastName: ownerLastName,
        address: ownerAddress,
        email: ownerEmail,
        phone: ownerPhone,
        birthdate: ownerbirthdate,
        gender: ownerGender,
        cpf: ownerCPF,
        city: ownerCity,
        state: ownerState,
        cep: ownerCEP,
        extraPhone: ownerExtraPhone,
      }),
    });
    const result = await response.json();
    console.log(result);
    console.log(owner);
  };
  const formItems = [
    {
      name: 'Nome:',
      type: 'text',
      onChange: (e) => setOwnerName(e.target.value),
      placeholder: 'Digite seu nome',
    },
    {
      name: 'Sobrenome:',
      type: 'text',
      onChange: (e) => setOwnerLastName(e.target.value),
      placeholder: 'Digite seu sobrenome',
    },
    {
      name: 'Email:',
      type: 'text',
      onChange: (e) => setOwnerEmail(e.target.value),
      placeholder: 'exemplo@exemplo.com',
    },
    {
      name: 'Telefone:',
      type: 'text',
      onInput: (e) => {
        const x = e.target.value
          .replace(/\D/g, '')
          .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !x[2]
          ? x[1]
          : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
        setOwnerPhone(e.target.value);
        e.target.setSelectionRange(
          e.target.value.length,
          e.target.value.length,
        );
      },
      maxLength: 15,
    },
    {
      name: 'Telefone2:',
      type: 'text',
      onInput: (e) => {
        const x = e.target.value
          .replace(/\D/g, '')
          .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !x[2]
          ? x[1]
          : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
        setOwnerExtraPhone(e.target.value);
        e.target.setSelectionRange(
          e.target.value.length,
          e.target.value.length,
        );
      },
      maxLength: 15,
    },
    {
      name: 'Data de nascimento:',
      type: 'text',
      onInput: (e) => {
        const x = e.target.value
          .replace(/\D/g, '')
          .match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
        e.target.value = !x[2]
          ? x[1]
          : `${x[1]}/${x[2]}${x[3] ? `/${x[3]}` : ''}`;
        setOwnerBirthdate(e.target.value);
        e.target.setSelectionRange(
          e.target.value.length,
          e.target.value.length,
        );
      },
      maxLength: 10,
    },
    {
      name: 'Gênero:',
      type: 'text',
      onChange: (e) => setOwnerGender(e.target.value),
    },
    {
      name: 'CPF:',
      type: 'text',
      onInput: (e) => {
        const x = e.target.value
          .replace(/\D/g, '')
          .match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
        e.target.value = !x[2]
          ? x[1]
          : `${x[1]}.${x[2]}.${x[3]}${x[4] ? `-${x[4]}` : ''}`;
        setOwnerCPF(e.target.value);
        e.target.setSelectionRange(
          e.target.value.length,
          e.target.value.length,
        );
      },
    },
    {
      name: 'Endereço:',
      type: 'text',
      onChange: (e) => setOwnerAddress(e.target.value),
      placeholder: 'Digite seu endereço',
    },
    {
      name: 'Cidade:',
      type: 'text',
      onChange: (e) => setOwnerCity(e.target.value),
    },
    {
      name: 'Estado:',
      type: 'text',
      onChange: (e) => setOwnerState(e.target.value),
    },
    {
      name: 'CEP:',
      type: 'text',
      onInput: (e) => {
        const x = e.target.value.replace(/\D/g, '').match(/(\d{0,5})(\d{0,3})/);
        e.target.value = !x[2] ? x[1] : `${x[1]}-${x[2]}`;
        setOwnerCEP(e.target.value);
        e.target.setSelectionRange(
          e.target.value.length,
          e.target.value.length,
        );
      },
      maxLength: 9,
    },
  ];
  return (
    <form onSubmit={handleSubmit} className={`${styles.yPaddings} form`}>
      {ownersData.map((ownerid) => (
        <div key={ownerid._id} className="">
          {ownerid._id}
        </div>
      ))}
      <div className="glassmorphism  p-5 gap-10">
        <div className="col-span-3 text-center p-5">
          <h2>Informações complementares</h2>
        </div>
        <div className="border bg-slate-300 grid  grid-cols-3 gap-5 rounded-lg shadow shadow-slate-600 p-2">
          <div className="col-span-3 flex justify-center items-center gap-3 text-center p-5">
            <h4>Manutenção 1</h4>
          </div>
          {formItems.map((item, index) => (
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
                  onInput={item.onInput}
                />
              )}
            </label>
          ))}
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OwnersForm;
