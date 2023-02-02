import React from 'react';

const ImageBuffer = ({ imageData }) => {
  const imageSrc = `data:image/jpeg;base64,${imageData.toString('base64')}`;

  return <img src={imageSrc} />;
};

export default ImageBuffer;
