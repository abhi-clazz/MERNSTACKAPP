import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getRoutes} from './actions/busAction'
import {logout,userlogout} from './actions/LoginAction'

const Navbar=(props)=> {
    
        return (
           
            <nav className="navbar navbar-expand-lg navbar-light"  >
                <span className="navbar-brand">Bus Ticket System</span>
                <div className="collapse navbar-collapse show" >

                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" onClick={()=>{props.getRoutes()}}  to="/busroutes">Bus Routes</Link>
                     </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/oplogin">Operator </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/userlogin">User </Link>
                 </li>
                    
                     <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                     </li>

                    </ul>
                </div>
            </nav>
        )
    }




    
    const mapStatetoProps = state => ({
        isAuthenticated: state.oplogin.isAuthenticated,
        isAuthenticated1: state.login.isAuthenticated1
    
    })
   
    
    export default connect(mapStatetoProps,{userlogout,logout,getRoutes})(Navbar)