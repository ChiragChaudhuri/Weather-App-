import React,{Component} from 'react';
import {connect} from 'react-redux'
import CountryList from './countrylist';
import { bindActionCreators } from 'redux';
import {onclick} from '../Actions/action';
import {Country} from '../Containers/Country';
const mapStateToProps=(store)=>{
    return({
        weather:store.weather,
        others:store.others,
        status:store.status
    });
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        onclick
    },dispatch);
}
class Weather extends Component{
    render(){
        return(
            <div>
                <CountryList onclick={this.props.onclick} />
                <Country weather={this.props.weather} others={this.props.others} status={this.props.status}/>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Weather);