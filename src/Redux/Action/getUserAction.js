// import * as CONSTANT from '../Constants/Constanst'

// export const getAllData = (token) => (dispatch) =>{

//     fetch('http://34.210.129.167/api/users', {
//         method: 'GET',
//         headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//         Authorization: `Bearer ${token}`
//         // Authorization: `Bearer ${accessToken} || eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zNC4yMTAuMTI5LjE2N1wvYXBpXC9sb2dpbiIsImlhdCI6MTYzMzU5NzgwNSwiZXhwIjoxNjMzNjAxNDA1LCJuYmYiOjE2MzM1OTc4MDUsImp0aSI6InhPWUQ2bFp1Ukcyd3dlOUYiLCJzdWIiOjEzLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.EZPfPy9mXePiQSA_Gn_ffcNhCaw1oeKso9Gu5EMxZaY`
//     },
//     })
//     .then((json)=> json.json())
//     // .then((response)=> dispatch(get_user(response)))
//     .then((response)=> console.log("response", response))
//     .catch((err)=>dispatch(get_userErr(err)))
//     // console.log("getdatarespondfse", response)

// }


// const get_user = (users) =>{
//     return{
//         type: CONSTANT.GET_USERS,
//         payload: users.users.data
//     }
// }
// const get_userErr = () =>{
//     return{
//         type: CONSTANT.GET_USERS,
//     }
// }