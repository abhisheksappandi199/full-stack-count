import axios from 'axios'

export const setCounter = (counter) =>{
    return { type :'GET' , payload : counter}
}
export const postCoounter = (counter) =>{
    return {type:'POST' ,payload : counter}
}
export const deleteCounter = (counter) =>{
    return { type:'DELETE',payload: counter}
}
export const updateCounter = (id,counter) =>{
    return { type :'UPDATE' , payload : {id , counter}}
}

export const StartGetCounter = () =>{
    return (dispatch) =>{
    axios.get('http://localhost:3033/api/counters')
    .then((response)=>{
        const data = response.data
        //console.log(data);
        dispatch(setCounter(data))
    })
    .catch((err) =>{
        alert(err)
    })
    }
}
export const StartPostCounter = () =>{
    return (dispatch) =>{
        axios.post('http://localhost:3033/api/counters')
        .then((response)=>{
            const data = response.data
            //console.log(data);
            dispatch(postCoounter(data))
        })
        .catch((err) =>{
            alert(err)
        })
    }
}
export const StartDeleteCounter = (id) =>{
    return (dispatch) =>{
        axios.delete(`http://localhost:3033/api/counters/${id}`)
        .then((response)=>{
            const data = response.data
            //console.log(data);
            dispatch(deleteCounter(data))
        })
        .catch((err) =>{
            alert(err)
        })
    }
}
export const StartUpdateCounter = (id,task) =>{
    return (dispatch) =>{
        axios.put(`http://localhost:3033/api/counters/${id}?type=${task}`)
        .then((response)=>{
            const data = response.data
            console.log(data)
            const dataa = delete data._id
            console.log(data);
            dispatch(updateCounter(id,data))
        })
        .catch((err) =>{
            alert(err)
        })
    }
}