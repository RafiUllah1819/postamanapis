import * as CONSTANT  from '../Constants/Constanst';

const initialState = {
    getUsers : []
}

const ReducerGetUsers = (state = initialState, actions) =>{
    switch(actions.type){

        case CONSTANT.GET_USERS:
            return{
                ...state,
                getUsers: actions.payload
            }
        default : 
            return state;
    }
}
 
export default ReducerGetUsers;