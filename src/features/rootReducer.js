import { combineReducers } from "redux";
import {reducer as counterRecucer} from './counter';
import {reducer as profileReducer} from './profile';


const rootReducer = combineReducers({
    counter : counterRecucer,
    profile : profileReducer



});
export {rootReducer};