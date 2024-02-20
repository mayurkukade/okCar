import React from 'react';

export default function MultipleImgUplod() {
  const [mult, setMult] = React.useState([]);

  const handleFileChange = (e) => {
    setMult(Array.from(e.target.files));
  };

console.log(mult)
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />

      <div>
        {mult.map((file, index) => (
          <img
            key={index}
            src={URL.createObjectURL(file)}
            alt={`Image ${index + 1}`}
            style={{ maxWidth: '500px', maxHeight: '500px', margin: '5px' }}
          />
        ))}
      </div>
    </div>
  );
}
