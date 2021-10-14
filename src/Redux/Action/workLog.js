export const createWorkLog = (state,token) => (dispatch) =>{
    console.log("action token", token, JSON.stringify(state))
   fetch('http://34.210.129.167/api/work-logs', {
       method: 'POST',
       body: JSON.stringify(state),
       headers: {
       'Content-type': 'application/json; charset=UTF-8',
       Authorization: `Bearer ${token}`
   },
   })
   .then((json)=> json.json())
   .then((response) => dispatch(fetch_workLog(token,1)))
   .catch((err)=>console.log(err))
}
export const fetch_workLog = (token,page) => (dispatch) =>{
    console.log("token worklog",token);
    console.log("token worklog",page);
    console.log("inside Fetch");
   fetch(`http://34.210.129.167/api/work-logs?page=${page}`, {
       method: 'GET',
       headers: {
       'Content-type': 'application/json; charset=UTF-8',
       Authorization: `Bearer ${token}`
   },
   })
   .then((json)=> json.json())
   .then((response) => dispatch(set_workLog(response.workLogs)))
   .then((response) => console.log("check get worklog last_page",response))
   .catch((err)=>console.log(err))
}
export const filterWorkLog = (from,to) => (dispatch) =>{
    const token = localStorage.getItem('token')
    console.log("token worklog",token);
    console.log("inside Fetch");
   fetch(`http://34.210.129.167/api/work-logs/${from}/${to}`, {
       method: 'GET',
       headers: {
       'Content-type': 'application/json; charset=UTF-8',
       Authorization: `Bearer ${token}`
   },
   })
   .then((json)=> json.json())
   .then((response) => dispatch(set_workLog(response.workLogs)))
   .then((response) => console.log("check get worklogresponse" , response))
   .catch((err)=>console.log(err))
}
export const deleteUserLog = (token,id) => (dispatch) =>{

    fetch(`http://34.210.129.167/api/work-logs/${id}`, {
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
    console.log("data of set worklog",data.last_page);
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