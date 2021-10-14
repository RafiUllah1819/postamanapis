import * as CONSTANT from '../Constants/Constanst'

const initialState = {
    editData : {}
}

const EditReducer = (state=initialState, actions) =>{
    switch(actions.type){
        
        case CONSTANT.EDIT_USER:
            return{
                ...state,
                editData:actions.user
            }
         default:
             return state;   
    }
}

export default EditReducer
