import setAuthToken from "../actions/setAuthToken";
import setAuthToken1 from "../actions/setAuthToken";







const initialState = {
    msg:'',err:'',
    idd:null,
    token: localStorage.getItem('token'),
    token1: localStorage.getItem('token1'),

    isAuthenticated: localStorage.getItem('token') ? true : false,
    isAuthenticated1: localStorage.getItem('token1') ? true : false

    //token: null,
    //isAuthenticated: false
}


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log(action.type)

            localStorage.setItem('token', action.pload);
            setAuthToken(action.pload)
            return {
                token: action.pload,
                isAuthenticated:true            }
        case "LOGIN_FAIL":
                console.log(action.type)
    
                //localStorage.setItem('token', action.pload);
                //setAuthToken(action.pload)
                return {
                    msg: action.pload,
                    //isAuthenticated: true
                }
        case "CON_ERR":return{
            err:'Server'
        }
        case "USERLOGIN_SUCCESS":
            console.log(action.type)

            localStorage.setItem('token1', action.payload.token);
            setAuthToken1(action.payload.token)
            return {
                token1: action.payload.token,
                isAuthenticated1: true,
                idd:action.payload.idd
            }
            case "USERLOGIN_FAIL":
                console.log(action.type)
    
                //localStorage.setItem('token', action.pload);
                //setAuthToken(action.pload)
                return {
                    msgu: action.payload,
                    //isAuthenticated: true
                }
        case "LOGOUT":
                console.log(action.type)

                localStorage.removeItem('token');
                return {
                    
                    isAuthenticated: false
                }
        case "USERLOGOUT":
                    console.log(action.type)
    
                    localStorage.removeItem('token1');
                    return {
                        
                        isAuthenticated1: false
                    }

                

        default:
            return state
    }
}

export default loginReducer;