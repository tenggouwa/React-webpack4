//包含n个reducer函数的模块
import {ADD_NAME, ADD_AGE} from './actionType.js'
import {combineReducers} from 'redux'
function addName(state='initRedux',action){ //形参默认值
    switch(action.type){
        case ADD_NAME:
            return action.data
        default:
            return state
    }
}
function addAge(state=0,action){
    switch(action.type){
        case ADD_AGE:
            return action.data
        default:
            return state
    }
}

export const finalReducer = combineReducers({
    addName,addAge
})