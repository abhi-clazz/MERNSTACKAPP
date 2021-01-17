import {logout} from '../actions/LoginAction'
import { connect } from "react-redux";
function Logout(props) {

    const signoff = (e) => {
        e.preventDefault()
       
        props.logout()
    }
return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light" >
                <div className="collapse navbar-collapse show" >

                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                        <form>
                    <button type="button"  onClick={signoff} className='btn btn-warning'>Logout</button>
                </form>
                </li>

                    </ul>
                </div>
            </nav>
       
        </div>
    )
}




export default connect(null,{logout})(Logout);
