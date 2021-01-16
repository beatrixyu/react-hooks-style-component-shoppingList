import React, {useContext} from 'react'
import { AuthContext } from '../context/auth-context'
import Card from './UI/Card'
import Button from './UI/Button'
import './Auth.css'

const Auth = (props) => {

    const authContext = useContext(AuthContext)
    const loginHandler = () => {
        authContext.login()
        console.log('ok')
    }
    return (
        <div className="auth">
            <div>
                <h3>You are not authenticated yet!</h3>
                <h4>Please login!</h4>
                <button onClick={loginHandler}>Login</button> 
            </div>
        </div>
    )
}

export default Auth