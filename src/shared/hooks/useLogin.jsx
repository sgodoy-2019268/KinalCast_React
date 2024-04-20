import { useState } from "react"
import toast from 'react-hot-toast'
import { loginRequest } from "../../services/api.js"

export const useLogin = () => {
    const [isRegister, setIsRegister] = useState(false)

    const login = async(email, password)=> {
        setIsRegister(true)
        const userLogin = {
          email,
          password
        }
        const response = await loginRequest(userLogin)
        setIsRegister(false)
    
        if(response.error){
            return toast.error(
                response?.e?.response?.data ||
                'Email o Password incorrectas. Intenta de nuevo.'
            )
        } else {
            toast.success('¡Has Iniciado Sesión!')
        }
        console.log(response)
    }

    return {
        login,
        isLoading: isRegister
    }
}