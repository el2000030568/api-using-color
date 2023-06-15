import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './pages/home';
import Country from './pages/countries';

function App() {

   let[data,setData] = useState([]);
   let[count,setCountry] = useState([]);
   const fetchdata = async()=>{
        const response = await axios.get('https://reqres.in/api/unknown');
        setData(response.data.data);
   }
   const fetchcountry = async()=>{
    const response = await axios.get('https://restcountries.com/v3.1/all');
    console.log(response);
   setCountry(response.data);
}
   
   useEffect(()=>{
    fetchdata();
    fetchcountry();
   },[]);


  return (
    <div className="App">
      <h1>Color-Task</h1>
     {data.map((post,index)=>{
      return <Home id={post.id} name={post.name} color={post.color} />
     })}
     <h1>Country-Task</h1>
     {count.map((post,index)=>{
           return <Country name1={post.name.common} url={post.flags.png} />
    })}

    </div>
  );
}

export default App;
