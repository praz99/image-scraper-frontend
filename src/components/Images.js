import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const useQuery = () => new URLSearchParams(useLocation().search);

const Images = () => {
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');
  const query = useQuery();
  const url = query.get('url');

  useEffect(() => {
    const fetchImages = async () => {
      const result = await axios.post('http://localhost:3001/scrape', { url });
      if (result.data.images) {
        setImages(result.data.images);
      } else {
        setMessage(result.data.message);
      }
    };
    fetchImages();
  }, [url]);

  const cleanImages = images.filter((img) => img);

  return (
    <>
      <div className="images">
        <Link to="/" className="home-button">Home</Link>
        {message && <div className="message-box"><p className="message">{message}</p></div>}
        <div className="images-container">
          {cleanImages.map((img) => (
            <img className="image-single" key={uuidv4()} src={img} alt="..." />
          ))}
        </div>
      </div>
    </>
  );
};

export default Images;
