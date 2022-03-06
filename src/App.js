import React,{useState} from 'react';
import './App.css';

function App() {
  const apiKey='f903ee9f27bc8398ab4bd451da140f70'
  const [weatherData,setWeatherData]=useState([{}])
  const [city,setCity]=useState("")
  const getWeather=(event) =>{
    if(event.key==="Enter" ){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(response => response.json()).then(
        data =>{
          setWeatherData(data)
          setCity("")
        }
      )
    }
  }
  function myFunction(event){
    
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(response => response.json()).then(
        data =>{
          setWeatherData(data)
          setCity("")
        }
      )
    
  }
 
  return (
   <>
   <h1 className='heading'>WheatherApp</h1>
    <div className="card">
    <div className='search'>
      <input 
      className="search-bar"
       placeholder='Enter CityName..'
       onChange={e=>setCity(e.target.value)}
       value={city}
       onKeyPress={getWeather}
       />
       <button onClick={myFunction}>Search</button>
        </div>
       {typeof weatherData.main ==='undefined'?(
         <div>
           <p>welcome to whether app</p>
         </div>
       ):(
         <div>
           <h2 >Wheather in {weatherData.name}</h2>
           <h1 className='temp'>{Math.round(`${weatherData.main.temp}`-273.15)}°C</h1>
           
           
           
           <p>{weatherData.weather[0].main}</p>
         </div>
       )}
    
    </div>
    </>
  
  );
}

export default App;
