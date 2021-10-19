import React, { Component } from 'react'
import CountersList from './CountersList'
import CounterItem from './CounterItem'
import {connect } from 'react-redux'
import {StartPostCounter} from '../actions/countAction'


 class Counters extends Component {
    handleClick =(e)=>{
        e.preventDefault()
       this.props.dispatch(StartPostCounter())
    }
    render() {
        return (
            <div>
                <button 
                className="btn btn-primary btn-sm" 
                style={{position:'absolute', top:80 ,left:400}}
                onClick={this.handleClick}
                >Create</button>
               <CountersList/> 
               <CounterItem/>
            </div>
        )
    }
}
const mapstateToProps = (state) =>{
    return {
        count : state.count
    }
}
export default connect(mapstateToProps)(Counters)