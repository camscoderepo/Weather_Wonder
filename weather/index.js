"use strict";
const axios = require("axios");
const apiKey = "c9cc86fb8f4d4968b4730724192402";

const formatData = data => {
  return {
    location: `${data.location.name}, ${data.location.country}`,
    temperature: data.current.temp_f,
    condition: data.current.condition.text,
    code: data.current.condition.code,
    forecast: data.forecast.forecastday.map(day => {
      return {
        date: day.date,
        code: day.day.condition.code,
        condition: day.day.condition.text
      };
    })
  };
};


let getWeather = location => {
  return new Promise(async (resolve, reject) => {
    try {
      const weatherConditions = await axios.get(
        "https://api.apixu.com/v1/forecast.json",
        {
          params: {
            key: apiKey,
            q: location,
            days: 3
          }
        });
      resolve(formatData(weatherConditions.data));
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = getWeather;
