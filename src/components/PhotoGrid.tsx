import React, { useState, useEffect } from 'react';

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = async () => {
    const response = await fetch('https://api.unsplash.com/photos/random?count=9&client_id=J92CYRK5T8Tl-2Vp6Th9rXonpT54O5vehf-JjMpABn8');
    const data = await response.json();
    setPhotos(data.map((photo: any) => photo.urls.small));
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`photo-${index}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;
