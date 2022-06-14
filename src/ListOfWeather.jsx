import React, { useState } from 'react'
import Search from './Search';
import Сity from './Сity';
import axios from 'axios';

export default function Container() {

  const[cities,setCities] = useState([
  ])

  const [city,setCity] = useState('')
  
  async function newWeatherPost() {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=873a80e24cc3b0c6aed3c090f1e19e99&units=metric`)
    let newCity = {
      id: response.data.id,
      city: response.data.name, 
      country: response.data.sys.country, 
      celsius: Math.round(response.data.main.temp), 
      weather: response.data.weather[0].description, 
      icon: response.data.weather[0].icon,
    }
    setCities([...cities,newCity])
  }


  function handClick (){
    if(!city){
      alert("Type your city")
    }else{
      newWeatherPost()
    }
    console.log(city);
    setCity('')
  }


  return (
    <div className='container'>
      <Search value={city}  setCity={setCity} onClick={handClick}/>
      <div className='blockWeather'>
      {cities.map(city => 
      <Сity cities={city} key={city.id}/>)}
      </div>
    </div>
  )
}