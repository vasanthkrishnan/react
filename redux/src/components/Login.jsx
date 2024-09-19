import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/userSlice' 

const Login = () => {
    const dispatch = useDispatch()
    const uname = useRef(null)
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login({
            name : uname.current.value
        }))
    }
  return (
    <>
        <form onSubmit={ handleLogin }>
            <input type="text" name="name" ref={ uname } id=""  required />
            <button type='submit'>Login</button>
        </form>
        <button onClick={ () => dispatch(logout())}>Logout</button>
    </>
  )
}

export default Login
