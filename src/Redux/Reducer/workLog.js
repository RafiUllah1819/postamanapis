const initialState = {
  workLog:[],
  page: 1,
  totalPages:[]
}

const WorkLogReducer = (state = initialState, action) =>{

    switch(action.type){
        case "SET_WORKLOG":
          const arr =[]; 
          for(let i=1; i<=action.pages;i++){
            arr.push(i);
          }
           return {
            workLog:action.workLog,
            totalPages: arr,
            
           }
           
        case "SET_WORKLOG_PAGE":
           return {
            page:action.page
           }
        default:
            return state 
    }
}

export default WorkLogReducer