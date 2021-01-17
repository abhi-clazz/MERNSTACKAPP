import axios from 'axios'



export const login = (userdata) => async (dispatch) => {
    try {
        await axios.post('http://localhost:4000/login', userdata).then(res => {
            if(res.data.msgu==="Invaliddd Credentials")
            {
                dispatch(
                    {
                        type: "USERLOGIN_FAIL",
                        payload: res.data.msgu
                    })}else{
            dispatch(
                {
                    type: "USERLOGIN_SUCCESS",
                    payload: res.data

                }
            )}
        
    })}
    catch (error) { console.log(error) }
}

export const oplogin = (userdata) => async (dispatch) => {
    try {
        await axios.post('http://localhost:4000/oplogin', userdata).then(res => {
            console.log(res.data.msg)

            if(res.data.msg==="Invalid Credentials")
            {
                dispatch(
                    {
                        type: "LOGIN_FAIL",
                        pload: res.data.msg
                    }
                )
            }
            else{

            dispatch(
                {

                    type: "LOGIN_SUCCESS",
                    pload: res.data.token,
                }
                
            )}

        })
    } catch (error) { console.log(error) 
        dispatch(
            {
                type: "CON_ERR",
            }
        )
    }
}
export const logout = ()=>{
    return{
        type:"LOGOUT"};
    }
    export const userlogout = ()=>{
        return{
            type:"USERLOGOUT"};
        }

       
         