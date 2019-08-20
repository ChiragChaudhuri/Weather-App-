
import { fetchWeatherData } from "../api/weather";
export const onclick=(country)=>{
    return (dispatch)=>fetchWeatherData(country).then(
        (response)=>response.json()
    ).then(
        (json)=>{
            console.log(json);
            dispatch({type:'ON_CLICK',payload:json});
        }).catch((error)=>{
            console.log(error);
            dispatch({type:'ERROR'});
        })
}