import { useState } from "react";

import { oplogin } from '../actions/LoginAction'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
//import { useHistory } from "react-router-dom";

const OperatorLogin = (props) => {

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



        console.log("hi2")

        props.oplogin(user)

        //console.log(props.msg)



    }


    return props.isAuthenticated ? (<Redirect to="/addbus" />) : (
        <div className="ticketapp">            <form onSubmit={formSubmit}>

            <h4 className="modal-title">Bus Operator Login</h4>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" required="required" value={username} name='username'
                    onChange={setValues} />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" required="required" value={password} name='password'
                    onChange={setValues} />
            </div>

            <input type="submit" className="btn btn-primary btn-block btn-lg" value="Login" />
            <br />

            <h6 className="alert alert-Light" aria-roledescription="alert">{props.msg}</h6>

        </form>
        </div>
    )


}

const mapStatetoProps = state => ({
    isAuthenticated: state.oplogin.isAuthenticated,
    msg: state.oplogin.msg,
    err: state.oplogin.err

})


export default connect(mapStatetoProps, { oplogin })(OperatorLogin);




