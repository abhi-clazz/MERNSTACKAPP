import { useState } from "react";
import { useHistory } from "react-router-dom";

import { register} from '../actions/busAction'
//import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
const UserRegister = (props) => {

    const [user, setUser] = useState({
        username: '',
        password: '',
        mobile:'',
        email:''
    })
    let setValues = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const { username, password,mobile,email } = user;
    const history=useHistory();

    const formSubmit = (e) => {
        console.log("hi")
        e.preventDefault();
        props.register(user)
      history.push('/userlogin')

 }

    return (
        <div>
             <div className="ticketapp">            <form onSubmit={formSubmit}>

<h4 className="modal-title">Create Account</h4>
<div className="form-group">
<input type="text" className="form-control" placeholder="Username" required="required" value={username} name='username'
        onChange={setValues}/>
</div>
<div className="form-group">
<input type="password" className="form-control" placeholder="Password" required="required" value={password} name='password'
        onChange={setValues} />
</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="Mobile" required="required" value={mobile} name='mobile'
        onChange={setValues} />
</div>

<div className="form-group">
<input type="email" className="form-control" placeholder="Email" required="required" value={email} name='email'
        onChange={setValues} />
</div>


<input type="submit" className="btn btn-primary btn-block btn-lg" value="Submit"/>              
</form>
</div>
        </div>
    )
}

export default connect(null,{register})(UserRegister)
