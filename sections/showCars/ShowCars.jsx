'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles';

const ShowCars = () => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/car');
      const data = await result.json();
      setCarsData(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.xPaddings}>
      <div className="grid grid-cols-4">
        {carsData.slice(1, 2).map((car, index) => (
          <div key={index} className="glassmorphism">
            <div className="text-center">
              <div className="font-bold">{car.owner}</div>
            </div>
            <Image src={car.image} width={300} height={300} alt="img" />
            <div className="text-center font-bold bg-gray-50 shadow-sm shadow-slate-300">
              {car.model}
            </div>
            <div className="p-2">
              <div>
                <span className="font-semibold">Dono:</span> {car.Ownername}
              </div>
              <div>
                <span className="font-semibold">Fabricante:</span>{' '}
                {car.manufacturer}
              </div>
              <div>
                <span className="font-semibold">Ano:</span> {car.year}
              </div>
              <div>
                <span className="font-semibold">Combustivel:</span> {car.fuel}
              </div>
            </div>
            <Link
              href={`/admin/car/${car._id}`}
              className="bg-gray-300 hover:bg-gray-500 hover:text-white flex justify-center"
            >
              Ver mais
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCars;
