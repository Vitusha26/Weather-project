import React from 'react'

export default function Сities(props) {
  const image =
  "http://openweathermap.org/img/wn/" + props.cities.icon + "@2x.png";
  return (
    <div>
      <div className='weather'>
        <p className='city'>{props.cities.city}
          <samp className='country'>{props.cities.country}</samp>
        </p>
        <p>{props.cities.celsius}°C</p>
        <p>{props.cities.weather}</p>
        <img src={image} alt=""/>
      </div> 
    </div>
  )
}
