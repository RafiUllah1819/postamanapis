import { url } from "./restapi"

export const getAllData = (token,page) => (dispatch) => {

    fetch(`${url}/users?page=${page}`, {
        method: 'GET',
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`
        },
    })
    .then((json)=> json.json())
    .then((response)=> dispatch(get_user(response.users)))
    .catch((err)=>console.log(err))
}
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
    .catch((err)=>console.log(err))

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
    .then((response)=> dispatch(getAllData(token)))
    .catch((err)=>console.log(err))

}
const get_user = (data) => {
    return {
        type: "SET_USERS",
        users:data.data,
        pages:data.last_page
    }
}
export const set_page = (page) => {
    return {
        type: "SET_PAGE",
        page
    }
}
export const edit_User = (user) =>{
    return{
        type: "EDIT_USER",
        user
    }
}