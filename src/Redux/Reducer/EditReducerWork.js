const initialState = {
    editWorkData : {}
}

const EditWorkReducer = (state=initialState, action) =>{
    switch(action.type){
        
        case "EDIT_WORK":
            return{
                ...state,
                editDataWork:action.data
            }
         default:
             return state;   
    }
}

export default EditWorkReducer