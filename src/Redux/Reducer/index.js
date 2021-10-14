import EditReducer from "./ReducerEditUser";
import AuthReducer from './auth';
import UsersReducer from './data';
import WorkLogReducer from "./workLog";
import { combineReducers } from "redux";
import EditWorkReducer from "./EditReducerWork";

const rootReducer = combineReducers({
    EditReducer,
    AuthReducer,
    UsersReducer,
    WorkLogReducer,
    EditWorkReducer 
})

export default rootReducer;