import React, { Component } from 'react'
import {connect } from 'react-redux'
import {StartDeleteCounter,StartUpdateCounter} from '../actions/countAction'

 class CounterItem extends Component {

     handleremove = (_id) =>{
         this.props.dispatch(StartDeleteCounter(_id))
     }
     handleChange = (_id,task) =>{
         this.props.dispatch(StartUpdateCounter(_id,task))
     }
     
    render() {
        return (
            <div style={{position:'absolute', top:100 ,left:100}}>
                {
                    this.props.count.map(e =>{
                        return (
                                <div key={e._id} >
                                <h2>Count - {e.count}</h2>
                                <button className="btn btn-outline-dark btn-sm" onClick={()=>{this.handleChange(e._id,'up')}}>up</button>{" "}
                                <button className="btn btn-outline-dark btn-sm" onClick={()=>{this.handleChange(e._id,'down')}}>down</button>{" "}
                                <button className="btn btn-outline-dark btn-sm" onClick={()=>{this.handleChange(e._id,'reset')}}>reset</button>{" "}
                                <button className="btn btn-outline-danger btn-sm" onClick={() =>{this.handleremove(e._id)}}>remove</button><br/><br/>
                                </div>
                            )
                        })
                }
            </div>
        )
    }
 }

const mapstateToProps = (state) =>{
    return {
        count : state.count     
    }
}
export default connect(mapstateToProps)(CounterItem)