'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const FBeamer = require('./fbeamer');

const server = express();
const PORT = process.env.PORT || 3000;
const f = new FBeamer(config.fb);

//Vanilla
const matcher = require('./matcher');
const weather = require('./weather');
const { currentWeather, forecastWeather} = require('./parser');

server.get('/', (req, res) => f.registerHook(req, res));
server.post('/', bodyParser.json ({
  varify: f.verifySignature
}));
server.post('/', (req, res, next) =>  {
  //Messages will be recieved here if the signature goes through
  //we will pass the messages to FBeamer for parsing
  return f.incoming(req, res, async data => {
    try {
      if(data.type == 'text') {
        matcher(data.content, async resp => {
          switch(resp.intent) {
            case 'Hello':
              await f.txt(data.sender, `${resp.entities.greeting} too you too!`);
              break;
            case 'Help':
              await f.txt(data.sender, 'I am a weather bot that can provide you weather data from anywhere in the world. Just type in something like what is the weather like in new york');
            case 'CurrentWeather':
              await f.txt(data.sender, 'Let me check...');
              let cwData = await weather(resp.entities.city, 'current');
              let cwResult = currentWeather(cwData);
              await f.txt(data.sender, cwResult);
              break;
            case 'WeatherForecast':
            await f.txt(data.sender, 'Let me check...');
            let wfData = await weather(resp.entities.city);
            let wfResult = forecastWeather(wfData, resp.entities);
            await f.txt(data.sender, wfResult);
            break;
          default: {
            await f.txt(data.sender, "I don't know if my computing power is strong enough to comprehend what you typed..")
            }
          }
        });
      }
    } catch(e) {
      console.log(e);
    }
  });
});
server.listen(PORT, () => console.log(`FBeamer Bot Service running on Port ${PORT}`));
