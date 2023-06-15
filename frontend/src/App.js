import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './pages/home';

function App() {

   let[data,setData] = useState([]);

   const fetchdata = async()=>{
        const response = await axios.get('https://reqres.in/api/unknown');
        console.log(response);
        setData(response.data.data);
   }
   
   useEffect(()=>{
    fetchdata();
   },[]);


  return (
    <div className="App">
     {data.map((post,index)=>{
      return <Home id={post.id} name={post.name} color={post.color} />
     })}
     <Home/>
    </div>
  );
}

export default App;
