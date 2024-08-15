import React, { useState, useEffect } from 'react';
import './PhotoGrid.css';

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [fade, setFade] = useState(false);

  const preloadImages = (urls: string[]) => {
    return Promise.all(
      urls.map(url => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve();
        });
      })
    );
  };

  const fetchPhotos = async () => {
    const newPhotos = Array.from({ length: 9 }, () => `https://picsum.photos/200/200?random=${Math.random()}`);
    
    setFade(true);     
    await preloadImages(newPhotos); 

    setPhotos(newPhotos); 
    setFade(false); 
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`grid grid-cols-3 gap-4 ${fade ? 'fade-out' : 'fade-in'}`}>
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`photo-${index}`} className="w-full h-48 object-cover rounded-lg" />
      ))}
    </div>
  );
};

export default PhotoGrid;
