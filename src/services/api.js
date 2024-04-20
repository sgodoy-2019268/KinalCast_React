import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:2656/twitch/v1',
    timeout: 1000
})

export const registerRequest = async(user)=>{
    try{
        return await apiClient.post('/auth/register', user)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const loginRequest = async (userLogin) => {
    try {
        return await apiClient.post('/auth/login', userLogin)
    } catch (error) {
        return {
            error: true,
            errorDetails: error
        }
    }
}