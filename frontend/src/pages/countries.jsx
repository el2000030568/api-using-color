import React, { useState } from "react";

export default function Country(props)
{
    let[name1,setname] = useState();
    let[url,seturl] = useState();
    return(
        <div>
            <div style={{width:'50%',height:'20px',padding:20,margin:10,borderRadius:10,marginLeft:280,boxShadow:'2px 1px 5px black'}}>
                <span style={{textAlign:'center'}}>{props.name1}</span>
                <img style={{position:'absolute',left:'300px',width:'80px',height:'40px'}} src={props.url}></img>
            </div>
        </div>
    );
}