const initialState = {
    token:'',
    role:'',
    userId:''
} 
const AuthReducer = (state = initialState, action ) =>{
    switch(action.type){
        case "SET_AUTH":
            return{
                token:action.token,
                role:action.role
            }
        case "INIT_AUTH":
            return{
                token:action.token,
                role:action.role,
                userId:action.userId
            }
         default :
         return state;   
    }
} 

export default AuthReducer;