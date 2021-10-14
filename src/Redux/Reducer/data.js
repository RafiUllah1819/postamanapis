const initialState = {
    users : [],
    page:1,
    totalPages:[]
}

const UsersReducer = (state = initialState, action) =>{
    switch(action.type){
        case "SET_USERS":
            const arr = [];
            for(let i=1;i<=action.pages;i++){
                arr.push(i);
            }
            return {
                ...state,
                users: action.users,
                totalPages:arr,    
            }
        case "SET_PAGE":
            return {
                ...state,
                page: action.page
            }
        default : 
            return state;
    }
}
 
export default UsersReducer;