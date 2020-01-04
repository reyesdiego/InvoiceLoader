const axios = require('axios');
const { WEATHER_ACCESSKEY } = require('../constants');

module.exports.current = async (req, res) => {
    axios
        .get(
            `http://api.weatherstack.com/current?access_key=${WEATHER_ACCESSKEY}&query=Buenos Aires`
        )
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};

module.exports.forecast = async (req, res) => {
    axios
        .get(
            `http://api.weatherstack.com/forecast?access_key=${WEATHER_ACCESSKEY}&query=Buenos Aires&forecast_days=1&hourly=1`
        )
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};
