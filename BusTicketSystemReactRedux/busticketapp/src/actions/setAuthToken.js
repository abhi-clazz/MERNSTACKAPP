  
import axios from 'axios'




export default function setAuthToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    else {
        delete axios.defaults.headers.common['Authorization']
    }

}
export  function setAuthToken1(token1) {
    if (token1) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token1}`
    }
    else {
        delete axios.defaults.headers.common['Authorization']
    }

}
