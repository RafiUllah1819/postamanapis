const initialState = {
    token:'',
    role:'',
    userId:'',
    code: [],
} 
const AuthReducer = (state = initialState, action ) =>{
    switch(action.type){
        case "SET_AUTH":
            return{
                token:action.token,
                role:action.role,
                code: action.code,
            }
            case "INIT_AUTH":
                return{
                    token:action.token,
                    role:action.role,
                    userId:action.userId,
                    code : action.code,
            }
         default :
         return state;   
    }
} 

export default AuthReducer;