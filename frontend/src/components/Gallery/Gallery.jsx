import React from 'react';
import './gallery.css'; // Assuming you save your CSS in a file named PhotoGallery.css

const imagePaths = [
  './src/Images/Swiper/nailart1.png',
  './src/Images/Swiper/nailart2.jpg',
  './src/Images/Swiper/nailart3.jpg',
  'https://assets.codepen.io/1506195/unsplash-music-4.avif',
  'https://assets.codepen.io/1506195/unsplash-music-5.avif',
  'https://assets.codepen.io/1506195/unsplash-music-6.avif',
  'https://assets.codepen.io/1506195/unsplash-music-7.avif',
  'https://assets.codepen.io/1506195/unsplash-music-13.avif',
  'https://assets.codepen.io/1506195/unsplash-music-11.avif',
  'https://assets.codepen.io/1506195/unsplash-music-9.avif',
  'https://assets.codepen.io/1506195/unsplash-music-10.avif',
  'https://assets.codepen.io/1506195/unsplash-music-12.avif',
];

const PhotoGallery = () => {
  return (
    <article className="gallery mt-5 mb-5">
<img src="https://assets.codepen.io/1506195/unsplash-music-0.avif" alt="guitar player at concert" />
      <blockquote className="quote spacer">
        <span>Az élet nem tökéletes,de a körmeid lehetnek azok.</span>
        <button className='mt-3'>időpont</button>
      </blockquote>
      {imagePaths.map((path, index) => (
        <React.Fragment key={index}>
          <img src={path} alt={`Image ${index}`} />
          {index % 3 === 2 && <div className="spacer"></div>}
        </React.Fragment>
      ))}
    </article>
  );
};

export default PhotoGallery;
