const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=edeee86b95dbb6391a10bcca6d911fed&query='+(latitude)+','+(longitude)+'&units=f'
    request({url, json:true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find location.', undefined)
        } else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. There is a ' + body.current.precip*10 + '% chance of rain. The humidity is ' + body.current.humidity + '%.');
        }
    })
}

module.exports = forecast