import { fetch_workLog } from "./workLog"
export const getDate = (token) => (dispatch) =>{

    fetch('http://34.210.129.167/api/users', {
        method: 'GET',
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`
        // Authorization: `Bearer ${accessToken} || eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zNC4yMTAuMTI5LjE2N1wvYXBpXC9sb2dpbiIsImlhdCI6MTYzMzU5NzgwNSwiZXhwIjoxNjMzNjAxNDA1LCJuYmYiOjE2MzM1OTc4MDUsImp0aSI6InhPWUQ2bFp1Ukcyd3dlOUYiLCJzdWIiOjEzLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.EZPfPy9mXePiQSA_Gn_ffcNhCaw1oeKso9Gu5EMxZaY`
    },
    })
    .then((json)=> json.json())
    // .then((response)=> dispatch(get_user(response)))
    .then((response)=> console.log("response", response))
    .catch((err)=>console.log(err))


}


const get_date = (date) =>{
    return{
        type: "SETDATE",
        date
    }
}

export const getHours = (preHours) => (dispatch) =>{
    const id = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    fetch(`http://34.210.129.167/api/users/${id}/preferred-working-hours`, {
        method: 'PATCH',
        body:JSON.stringify(preHours),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`
    },
    })
    .then((json)=> json.json())
    // .then((response)=> dispatch(get_user(response)))
    .then((response)=> dispatch(fetch_workLog(token)))
    .catch((err)=>console.log(err))


}


const userNEwId = () => {
    const id = localStorage.getItem('userId');

    return {
        type : "UserNEwId",
        id:id==='undefined'?undefined:id,
    }
}