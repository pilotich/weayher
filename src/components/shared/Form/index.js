// libraries
import React, { useEffect } from 'react';
import { getCurrentWeather } from '../../../api/weather';

const Form = () => {
  // useEffect( async () => {
  //   const data = await getCurrentWeather;
  //   });
  // const baseUrl = process.env.REACT_APP_API_URL;
  // console.log(baseUrl)

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(event.target.query.value)

    const formData = {
      [event.target.query.name]: event.target.query.value
    };
    try {
      const data = await getCurrentWeather(formData);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="query">City</label>
      <input id="query" type="text" name="query" placeholder="Please enter the city" />
      <input id="submit" type="button" name="query" value="Submit" />
    </form>
  );
};

export default Form;
