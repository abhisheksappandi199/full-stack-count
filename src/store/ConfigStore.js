import {createStore , combineReducers ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import countReducer from '../reducers/countReducer'

const Configstore = () =>{
    const store = createStore(combineReducers({
        count : countReducer
    }),applyMiddleware(thunk))
    return store
}

export default Configstore