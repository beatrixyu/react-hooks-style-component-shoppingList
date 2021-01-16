import React, {useState} from 'react'

export const AuthContext = React.createContext({
    isAuth: false,
    login:()=>{}
})

const AuthContextProvider = props => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const loginHandler = () => {
        setIsAuthenticated(true)
    }
    return (
        <AuthContext.Provider value={{login: loginHandler, isAuth: isAuthenticated}}>
            {/* the provider will distrubute to everryone listening if value changes will get the updated value*/}
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider