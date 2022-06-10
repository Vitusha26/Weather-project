import React from 'react'
import { TiWeatherPartlySunny } from 'react-icons/ti';

export default function Search(props) {
  return (
    <div>
        <input
        className='inpText'
        type="text"
        placeholder="Type your city"
        value={props.value}
        onChange={(e) => props.setCity(e.target.value)}/> 
        <button className='button' onClick={props.onClick}><TiWeatherPartlySunny/></button>
    </div>
  )
}
