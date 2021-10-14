import * as CONSTANT from '../Constants/Constanst';

const initialState = {
    users : []
} 

const UserReducer = (state = initialState, actions) =>{
    switch(actions.type){
        case CONSTANT.SET_USER:
            return {
                ...state,
                users: actions.payload
            }
            default: return state;
    }
}

export default UserReducer