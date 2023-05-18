import React, { useState } from 'react';

function App() {
  const [imageURL, setImageURL] = useState('');

  const generateImage = () => {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint that generates the image
    fetch('https://django-server-production-602e.up.railway.app/apis/generate-image')
      .then(response => response.json())
      .then(data => {
        // Assuming the API response returns the image URL
        setImageURL(data.imageURL);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Image Generator App</h1>
      <button onClick={generateImage}>Generate Image</button>
      {imageURL && <img src={imageURL} alt="Generated Image" />}
    </div>
  );
}

export default App;
