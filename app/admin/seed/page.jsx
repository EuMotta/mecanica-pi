'use client';

import '../../../styles/globals.css';
import React from 'react';

const seed = () => {
  const [showMessage, setShowMessage] = React.useState(false);

  function sendSeedRequest() {
    fetch('/api/seed', { method: 'POST' })
      .then((response) => response.json())
      .then(() => {
        setShowMessage(true);
      });
  }

  return (
    <main title="Seed" className="flex flex-col justify-center items-center h-96">
      <div className="text-center">Deseja executar a Seed?</div>
      <button type="button" onClick={sendSeedRequest} className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
        Executar
      </button>
      {showMessage && (
        <div className="toast">A Seed foi executada com sucesso!</div>
      )}
    </main>
  );
};

export default seed;
