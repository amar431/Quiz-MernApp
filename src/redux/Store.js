import { configureStore,combineReducers } from '@reduxjs/toolkit';
 import userReducer from "./user/userSlice"
import questionReducer from './quizReducer';
import resultReducer from './resultReducer';

const rootReducer = combineReducers({
    questions: questionReducer,
    result:resultReducer,
    user:userReducer
})

export default configureStore({
    reducer:rootReducer
    // reducer:{
    //     user:userReducer
    // }
})