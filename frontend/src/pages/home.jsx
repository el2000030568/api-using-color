import React, { useEffect,useState } from "react";

export default function Home(props){

    let[id,setid] = useState();
    let[name,setname] = useState();
    let[color,setcolor] = useState();
    useEffect(()=>{
        setid(props.id)
        setname(props.name);
        setcolor(props.color);
    });

    return(
        <div style={{alignItem:'center'}}>
             <div style={{width:'50%',height:'20px',padding:20,"backgroundColor":color,margin:10,borderRadius:10}}>
                <span style={{position:'absolute',left:'50px'}}>{id}</span>
                <span style={{textAlign:'center'}}>{name}</span>
                </div>  
        </div>
    )
}