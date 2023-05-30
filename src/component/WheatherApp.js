import React, { useEffect, useState } from 'react'

const Screen = () => {
    const[city,setCity]= useState('Delhi');
    let myApi=  `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=143454aa39bbe3442a890cdbf3f9db36`
  
    const[apiLink, setApi]= useState(myApi);
    const[apiData,setApiData] =useState({
        main:{
            temp:0
        }
});

    useEffect(()=>{
        const getApi= async()=>{
            const  response =await fetch(apiLink);
            const result =await response.json();

            setApiData(()=>({
                ...result
            }))
            console.log(apiData);
        }
        getApi();
    },[apiLink])

    const handleCityInput=(e)=>{
        setCity(e.target.value)
    }

    const handleSearch=()=>{
        setApi(myApi);

    }

   return (
    <div style={{backgroundColor:'rgb(227,183,183)'}}>
        <h2>Weather application</h2>
        <br/>
        <input type='text' placeholder='Enter new city' onChange={handleCityInput}/>
        <button onClick={handleSearch}>Seacrh</button>
        <br/>
        <br/>
        <div>
            <h2 style={{display:'inline'}}>Temprature</h2>
            <br/>
            <br/>
            <p style={{display:'inline'}}>{apiData.main.temp}</p>
        </div>
    </div>
  )
}

export default Screen