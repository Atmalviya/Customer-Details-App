import React, { useState, useEffect } from 'react';
import './PhotoGrid.css';

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>(Array(9).fill(''));
  const [zoom, setZoom] = useState<boolean[]>(Array(9).fill(false));

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
    
    setZoom(Array(9).fill(true)); 
    
    await preloadImages(newPhotos); 

    setTimeout(() => {
      setPhotos(newPhotos); 
      setZoom(Array(9).fill(false));
    }, 500); 
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`photo-${index}`}
          className={`w-full h-48 object-cover rounded-lg transition-transform duration-500 ${zoom[index] ? 'zoom-out' : 'zoom-in'}`}
        />
      ))}
    </div>
  );
};

export default React.memo(PhotoGrid);
