import * as CONSTANT from '../Constants/Constanst'
import { url } from './restapi'

export const getEditData = (token,push, state) => (dispatch) =>{

    fetch(`${url}/users/${state.id}`, {
        method: 'PUT',
        body: JSON.stringify(state),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`
    },
    })
    .then((json)=> json.json())
    .then((response)=> push('/users'))
    .catch((err)=>dispatch(edit_UserErr(err)))

}
export const deleteUser = (token,id) => (dispatch) =>{

    fetch(`${url}/users/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`
    },
    })
    .then((json)=> json.json())
    .then((response)=> console.log(response))
    .catch((err)=>dispatch(edit_UserErr(err)))

}

export const edit_User = (user) =>{
    return{
        type: CONSTANT.EDIT_USER,
        user
    }
}
const update_User = (users) =>{
    return{
        type: CONSTANT.EDIT_USER,
        payload: users.users.data
    }
}
const edit_UserErr = () =>{
    return{
        type: CONSTANT.EDIT_USERERR,
    }
}

