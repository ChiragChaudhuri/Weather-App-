  
import {Status} from './Status.js';
import React from 'react';
export const Country=(props)=>{
    if(props.status)
    return(<div>{
    props.weather.map((item,index)=><Status description={item.description} others={props.others} index={index}/>)
    }</div>)
    else
    return(<div>
        <p style={{marginLeft:'45%'}}>City not found</p>
    </div>)
}
