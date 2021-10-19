const initialstate = []

const countReducer = (state = initialstate,action) =>{
    switch(action.type){
        case 'GET' :{
            return [...action.payload]
        }
        case 'POST':{
            return [...state , action.payload]
        }
        case 'DELETE' :{
            return state.filter(e => e._id != action.payload._id)
        }
        case 'UPDATE':{
             return state.map((ele)=>{
                 if(ele._id === action.payload.id){
                     return {...ele , ...action.payload.counter}
                 }
                 else{
                     return {...ele}
                 }
             })
        }
        default : { return [].concat(state)} 
    }
}

export default countReducer