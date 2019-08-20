import React,{Component} from 'react';
import icon from '../icon.png'

class CountryList extends Component{
    constructor(props){
        super(props)
        this.state={str:''}
    }
    change=(event)=>{
        this.setState({str:event.target.value})
    }
    render(){
        return(
            <div >
                <div className="div">
                    <img src={icon} height='100px' style={{marginLeft:'45.5%',marginTop:'13px'}}/>
                    <p style={{marginLeft:'43.5%',fontStyle:'Italic',fontWeight:'450'}}>WEATHER FORECAST</p>
                </div>
                <div className="buttons">
                <p>Enter city name :&nbsp;&nbsp;
                <input type='text' onChange={this.change}/>&nbsp;&nbsp;
                <button onClick={()=>this.props.onclick(`${this.state.str}`)}>Search</button>
                </p>
                </div>
            </div>
        )
    }
}
export default CountryList;
