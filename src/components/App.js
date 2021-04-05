import React,  { useState } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const [state, setState] = useState({
    url: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const { url } = state;

  const addhttp = url => {
    if (!/^(?:f|ht)tps?:\/\//.test(url)) {
      url = "https://" + url;
    }
    return url;
  };

  return (
    <>
    <div className="App">
      <h1>Grab the images</h1>
      <div className="input-container">
        <label htmlFor="url-input">Enter the URL</label>
        <input
          placeholder="http://www.example.com"
          className="url-input"
          id="url-input"
          type="url"
          name="url"
          value={url}
          onChange={handleChange}
        />
        <Link to={`/images?url=${addhttp(url)}`}>Go</Link>
      </div>
    </div>
    <div className="input-info">
      <p>Grab the images is a tool that fetches all the images that are present in a webpage. Enter the URL of the webpage in the input field and press the Go button.</p>
    </div>
    </>
  );
}

export default App;
