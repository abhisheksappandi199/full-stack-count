import React, { Component } from 'react'
import {connect } from 'react-redux'
import {StartGetCounter,StartPostCounter} from '../actions/countAction'

 class CountersList extends Component {
     componentDidMount(){
         if(this.props.count.length == 0){
            this.props.dispatch(StartGetCounter())
         }
     }
     
    render() {
        return (
            <>
            <h2 style={{position:'absolute', top:36 ,left:100}}>Counter List - {this.props.count.length}</h2>
            
            </>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        count : state.count
    }
}

export default connect(mapStateToProps)(CountersList)