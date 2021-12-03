import { toast } from 'react-toastify';
import { url } from "./restapi"
let usercode;
const error = (msg) => {
    toast.error(msg,{
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
    })
  }
  const success = (msg) => {
    toast.success(msg,{
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
    })
  }

export const createWorkLog = (state,token,push) => (dispatch) =>{
    // console.log("action token", token, JSON.stringify(state))
   fetch(`${url}/work-logs`, {
       method: 'POST',
       body: JSON.stringify(state),
       headers: {
       'Content-type': 'application/json; charset=UTF-8',
       Authorization: `Bearer  ${token}`
   }, 
   })
   .then((json)=>{
       usercode = json.status
       localStorage.setItem('usercode',usercode)
       json.json()
   } 
   )
   .then((response) =>{ 
    if(usercode!==422 && usercode!==400){
        dispatch(fetch_workLog(token,1));
        // push('/UserLogList')
        success("workLog added successfully")
    }else if(usercode===422) error("WorkLog can't add before current day")
          if(usercode===400) error("Can't add work on same date")
    
})
   .catch((err)=>console.log(err))
}
export const fetch_workLog = (token,page) => (dispatch) =>{
    // console.log("token worklog",token);
   fetch(`${url}/work-logs?page=${page}`, {
       method: 'GET',
       headers: {
       'Content-type': 'application/json; charset=UTF-8',
       Authorization: `Bearer ${token}`
   },
   })
   .then((json)=> json.json())
   .then((response) => dispatch(set_workLog(response.workLogs)))
   .catch((err)=>console.log(err))
}
export const filterWorkLog = (from,to) => (dispatch) =>{
    const token = localStorage.getItem('token')
    // console.log("token worklog",token);
   fetch(`${url}/work-logs/${from}/${to}`, {
       method: 'GET',
       headers: {
       'Content-type': 'application/json; charset=UTF-8',
       Authorization: `Bearer ${token}`
   },
   })
   .then((json)=> json.json())
   .then((response) => dispatch(set_workLog(response.workLogs,response.pages)))
   .catch((err)=>console.log(err))
}
export const deleteUserLog = (token,id) => (dispatch) =>{

    fetch(`${url}/work-logs/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`
    },
    })
    .then((json)=> json.json())
    .then((response)=> dispatch(fetch_workLog(token)))
    .catch((err)=>console.log(err))

}

export const set_workLog = (data) =>{
    // console.log("data of set worklog",data.last_page);
    return {
        type : "SET_WORKLOG",
        workLog: data.data,
        pages: data.last_page
    }
}

export const set_worklog_page = (page) => {
    return {
        type: "SET_WORK_PAGE",
        page
    }
}