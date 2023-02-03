import './Resort.css';
import React from 'react';
import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather'
const iconUrl = 'https://openweathermap.org/img/wn/'

function Resort(props) {
    const [res, setRes] = React.useState(null)
    
    React.useEffect(() => {
       
        axios.get(url, { params: {lat: props.lat, lon: props.lon, appid: props.appid, units: "imperial"}}).then((response) => {
            console.log(url, `?lat${props.lat}&long${props.lon}&appid${props.appid}`)
            setRes(response.data)
            console.log('temp: ', response.data)
        });
    }, [props]);

    if (!res) return null;

    return (
        <div className='Resort'>
            <div className='Resort-Header'>
                {res.weather[0].icon ? <img src={iconUrl + res.weather[0].icon + '@2x.png'} alt="weather-icon"/> : null}
                {res.main ? <span className='H1'> <b>{props.resortName}</b> {Math.round(res.main.temp)}°</span> : <span className='H1'><b>{props.resortName}</b></span>}
            </div>
            <div className='Resort-Data'>
                {res.main ? <span><b>High:</b> {Math.round(res.main.temp_max)} </span> : null }
                {res.main ? <span><b>Low:</b> {Math.round(res.main.temp_min)} </span> : null }
                {res.weather ? <span><b>Weather:</b> {res.weather[0].main} </span> : null}
                {res.wind ? <span><b>Wind:</b> {Math.round(res.wind.speed)} </span> : null}
            </div>
        </div>
    );
}

/*
<div className='Resort-Data'>
                {res.main ? <span>high: {res.main.temp_max} </span> : null }
                {res.main ? <span>low: {res.main.temp_min} </span> : null }
                {res.weather ? <span>weather: {res.weather[0].main} </span> : null}
                {res.wind ? <span>wind: {res.wind.speed} </span> : null}
            </div>
*/

export default Resort;