'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../../styles';
import car1 from '../../public/car1.webp';

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
        {carsData.map((car) => (
          <div className="glassmorphism">
            <div className="text-center">
              <div className="font-bold">{car.owner}</div>
            </div>
            <Image src={car1} width={300} height={300} unoptimized />
            <div className="text-center">
              {car.model}
            </div>
            <div className="">
              <span className="font-semibold">Dono:</span> {car.Ownername}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCars;
