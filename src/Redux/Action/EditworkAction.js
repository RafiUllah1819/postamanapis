import { fetch_workLog } from './workLog'
export const getEditLog = (token,push, state) => (dispatch) =>{

    fetch(`http://34.210.129.167/api/work-logs/${state.id}`, {
        method: 'PUT',
        body: JSON.stringify(state),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`
        // Authorization: `Bearer ${accessToken} || eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zNC4yMTAuMTI5LjE2N1wvYXBpXC9sb2dpbiIsImlhdCI6MTYzMzU5NzgwNSwiZXhwIjoxNjMzNjAxNDA1LCJuYmYiOjE2MzM1OTc4MDUsImp0aSI6InhPWUQ2bFp1Ukcyd3dlOUYiLCJzdWIiOjEzLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.EZPfPy9mXePiQSA_Gn_ffcNhCaw1oeKso9Gu5EMxZaY`
    },
    })
    .then((json)=> json.json())
    .then((response)=> {
        dispatch(fetch_workLog(token))
        push('/UserLogList')
    })
    .catch((err)=>dispatch(edit_WorkErr(err)))

}

export const edit_work = (data) =>{
    return{
        type: "EDIT_WORK",
        data
    }
}

const edit_WorkErr = () =>{
    return{
        type: "EDIT-WORKERR",
    }
}

