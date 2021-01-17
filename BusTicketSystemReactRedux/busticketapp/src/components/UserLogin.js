import { useState } from "react";
//import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

import { login} from '../actions/LoginAction'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
const  UserLogin=(props)=> {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    let setValues = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const { username, password } = user;
    //const history=useHistory();

    const formSubmit = (e) => {
        console.log("hi")
        e.preventDefault();
        props.login(user)
     // history.push('/logout')

 }

    return props.isAuthenticated1 ? (<Redirect to="/bus" />) :(
         <div className="ticketapp">            <form onSubmit={formSubmit}>

<h4 className="modal-title">Login to Your Account</h4>
<div className="form-group">
<input type="text" className="form-control" placeholder="Username" required="required" value={username} name='username'
        onChange={setValues}/>
</div>
<div className="form-group">
<input type="password" className="form-control" placeholder="Password" required="required" value={password} name='password'
        onChange={setValues} />
</div>

<input type="submit" className="btn btn-primary btn-block btn-lg" value="Login"/> 
<p className='model-title'/>Don't have account ? <Link  to="/reg">Register</Link>

<h6 className="alert alert-Light" aria-roledescription="alert">{props.msgu}</h6>

</form>
</div>)
   

}

const mapStatetoProps = state => ({
    isAuthenticated1: state.login.isAuthenticated1,
    msgu: state.login.msgu,
    err:state.login.err

})


export default connect(mapStatetoProps, { login })(UserLogin);

