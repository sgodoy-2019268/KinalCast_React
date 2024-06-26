import './AuthPage.css'
import { Register } from "../../components/Register.jsx"
import { Login } from '../../components/Login.jsx'
import { useState } from 'react'

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const handleAuthPage = ()=>{
    setIsLogin((prev)=> !prev)
    setIsRegister((prev)=> !prev)
  }
  return (
    <div className='auth-container'>
      {
        isLogin ? (
          <Login switchHandler={handleAuthPage} />
        ) : (
          <Register switchAuthAndler={handleAuthPage}/>
        )
      }
    </div>
  )
}