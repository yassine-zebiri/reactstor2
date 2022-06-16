import { configureStore } from '@reduxjs/toolkit';
import headerToolsReducer from './headerTools';
const redux=configureStore({
    reducer:{
        headerTools:headerToolsReducer,
    }
})
export default redux;