// https://darksky.net/dev/docs
// access key '1e4cfb944fd543aeaa499c8d1fb918cc'

const axios = require('axios');
const { WEATHER_ACCESSKEY, GOOGLE_MAPS_KEY } = require('../constants');

const getCoordinates = location => {
    return new Promise((resolve, reject) => {
        let formattedLocation = encodeURIComponent(location);
        axios
            .get(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedLocation}&key=${GOOGLE_MAPS_KEY}`
            )
            .then(response => {
                const body = response.data;
                if (body.status === 'ZERO_RESULTS') {
                    reject(new Error('Unable to find specified location, try reformating input'));
                } else if (body.status === 'OK') {
                    let results = {
                        lat: body.results[0].geometry.location.lat,
                        lng: body.results[0].geometry.location.lng
                    };
                    resolve(results);
                }
            })
            .catch(error => {
                reject(new Error('Unable to connect to Google Services'));
            });
    });
};

module.exports.current = async (req, res) => {
    const { lat, lng } = await getCoordinates(req.query.location);

    axios
        .get(`https://api.darksky.net/forecast/${WEATHER_ACCESSKEY}/${lat},${lng}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};

module.exports.forecast = async (req, res) => {
    const { lat, lng } = await getCoordinates(req.query.location);
    axios
        .get(`https://api.darksky.net/forecast/${WEATHER_ACCESSKEY}/${lat},${lng}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};
