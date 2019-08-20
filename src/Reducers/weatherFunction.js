const initialState={
    weather:[],
    others:{},
    status:true
}
export const weather=(state=initialState,action)=>{
    switch(action.type){
        case 'ON_CLICK':
            while(action.payload.weather.length-1)
            action.payload.weather.pop();
                return{
                    ...state,
                    status:true,
                    weather:action.payload.weather,
                    others:action.payload
                }
                
        case 'ERROR':
                return{
                    ...state,status:false
                }
        default: return (state);
    }
}