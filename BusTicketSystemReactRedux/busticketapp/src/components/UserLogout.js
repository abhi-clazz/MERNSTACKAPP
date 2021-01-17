import {userlogout} from '../actions/LoginAction'
import {viewbookings} from '../actions/busAction'
import { useState } from "react";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
const UserLogout=(props) =>{
    const history=useHistory();

    const signoff = (e) => {
        e.preventDefault()
       
        props.userlogout()
           history.push('/userlogin')

    }
   
    
    const [sid] = useState({
        id: props.idd
        
    })
    const view = (e) => {
        e.preventDefault()
        props.viewbookings(sid)
   history.push('/bookings')
    }
       
return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light" >
                <div className="collapse navbar-collapse show" >

                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                        <button type="button"  onClick={view} className='bot'>mybookings</button>&nbsp;
                    <button type="button"  onClick={signoff} className='btn-warning'>Logout</button>
                
                </li>

                    </ul>
                </div>
            </nav>
       
        </div>
    )
}
const mapStatetoProps = state => ({
    idd: state.login.idd
})


export default connect(mapStatetoProps,{userlogout,viewbookings})(UserLogout)
