// ./src/context/User/UserState
import React, { useReducer } from 'react'
import UserContext from './UserContex'
import UserReducer from './UserReducer'
import axiosClient from './../../config/axios'

export default function UserState(props) {
  // 1. Initial State
  const initialState = {

    currentUser: {
      name: '',
      lastName: '',
      country: '',
      address: '',
      email: '',
      password: ''
    },
    authStatus: false
  }

  //2. Configuracion del reducer

  const [globalState, dispatch] = useReducer(UserReducer, initialState)

  //3.Funciones
  const registerUser = async (form) => {
      const res = await axiosClient.post('users/create', form)

      const token = res.data.data

      dispatch({
        type: 'SUCCESSFULL_REGISTRATION',
        payload: token
      })
  }

  const loginUser = async (form) => {

    const res = await axiosClient.post('users/login', form)

    const token = res.data.data

    dispatch({
      type: 'SUCCESSFULL_LOGIN',
      payload: token
    })
  }

  const verifyingToken = async () => {
    const token = localStorage.getItem('token')

    //anexar token a la siguiente peticion de axios
    if(token) {
      axiosClient.defaults.headers.common['x-auth-token'] = token
    } else {
      delete axiosClient.defaults.headers.common['x-auth-token']
    }

    try {
      const res = await axiosClient.get('users/verifytoken')

      const userData = res.data.data

      dispatch({
        type: 'GET_DATA_USER',
        payload: userData
      })

    } catch (error) {
      console.log(error);
    }   
  }

  const logoutUser = async () => {
    dispatch({
      type: 'LOGOUT_USUARIO'
    })
  }

  return (
    <UserContext.Provider
      value={{
        currentUser: globalState.currentUser,
        authStatus: globalState.authStatus,
        registerUser,
        loginUser,
        verifyingToken,
        logoutUser
      }}
    >
      {props.children}

    </UserContext.Provider>
  
  )
}
