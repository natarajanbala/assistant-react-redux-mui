import { combineReducers } from 'redux';
import addMain from './addMain';
import taskTodo from './taskTodo';


export const defaultState = {
    openModal: false
}




export default combineReducers({
    //header: headerReducer,
    //login: loginReducer,
    //dashboard,
    addMain,
    taskTodo,
    //meeting,
    //appointment,
    //reminder
});