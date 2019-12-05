import {
  ADD_NAME,
  ADD_AGE,
} from './actionType.js'
//包含所有的action creator
export const addNameCreater = (name) =>({type:ADD_NAME, data:name})
export const addAgeCreater = (age) => ({type:ADD_AGE, data:age})
export const addNameAsync = (name) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(addNameCreater(name))
        },2000);
    }
}