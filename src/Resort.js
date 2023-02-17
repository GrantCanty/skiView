import './Resort.css';
import React from 'react';
import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather'
const iconUrl = 'https://openweathermap.org/img/wn/'

function Resort(props) {
    const [res, setRes] = React.useState(null)
    
    React.useEffect(() => {
       
        axios.get(url, { params: {lat: props.lat, lon: props.lon, appid: props.appid, units: "imperial"}}).then((response) => {
            setRes(response.data)
        });
    }, [props]);

    if (!res) return null;

    const words = props.resortName.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    const resortName = words.join(" ")

    return (
        <div className='resort'>
            <div className='resort-header'>
                {res.weather[0].icon ? <img src={iconUrl + res.weather[0].icon + '@2x.png'} alt="weather-icon"/> : null}
                {res.main ? <span className='resort-text'> <b>{resortName}</b> {Math.round(res.main.temp)}°F</span> : <span className='resort-text'><b>{props.resortName}</b></span>}
            </div>
            <div className='resort-data'>
                {res.main ? <span><b>High:</b> {Math.round(res.main.temp_max)}°F </span> : null }
                {res.main ? <span><b>Low:</b> {Math.round(res.main.temp_min)}°F </span> : null }
                {res.weather ? <span><b>Weather:</b> {res.weather[0].main} </span> : null}
                {res.wind ? <span><b>Wind:</b> {Math.round(res.wind.speed)} mph </span> : null}
            </div>
        </div>
    );
}

export default Resort;