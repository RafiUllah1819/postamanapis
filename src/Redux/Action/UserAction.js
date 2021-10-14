import * as CONSTANT from '../Constants/Constanst'

export const createUser = (state, token) => (dispatch) =>{
     console.log("action state", state)
    fetch('http://34.210.129.167/api/users', {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`
        // Authorization: `Bearer ${accessToken} || eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zNC4yMTAuMTI5LjE2N1wvYXBpXC9sb2dpbiIsImlhdCI6MTYzMzU5NzgwNSwiZXhwIjoxNjMzNjAxNDA1LCJuYmYiOjE2MzM1OTc4MDUsImp0aSI6InhPWUQ2bFp1Ukcyd3dlOUYiLCJzdWIiOjEzLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.EZPfPy9mXePiQSA_Gn_ffcNhCaw1oeKso9Gu5EMxZaY`
    },
    })
    .then((json)=> json.json())
    // .then((response) => dispatch(setUser(response)))
    .then((response) => console.log("response" , response))
    .catch((err)=>dispatch(setUserErr(err)))
}

const setUser = (user) => {
    return {
        type : CONSTANT.SET_USER,
        payload: user
    }
}
const setUserErr = () => {
    return {
        type : CONSTANT.SET_USERErr,
       
    }
}
export default {
    createUser,
    setUser, 
    setUserErr
}