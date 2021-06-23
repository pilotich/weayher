// libraries
import React, { useState, useEffect } from 'react';
// static
// styles
import './App.css';
import { getCurrentWeather } from '../api/weather';
import Form from './shared/Form';

const App = () => {
  const [ weatherData, setweatherData ] = useState()
  // useEffect( async () => {
  //   const data = await getCurrentWeather;
  //   });
  // const baseUrl = process.env.REACT_APP_API_URL;
  // console.log(baseUrl)
    return (
        <div className="container">
          <h2 className="page-title">Welcome</h2>
          <Form />
          {/*data && <WeatherCard/>*/}
        </div>
    );
};

export default App;
