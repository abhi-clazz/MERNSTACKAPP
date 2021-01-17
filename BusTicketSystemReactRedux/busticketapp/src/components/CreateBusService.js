import { useState } from "react";
import { useHistory } from "react-router-dom";

import React from 'react'
import{addbus} from '../actions/busAction'
import Logout from './Logout'
import { login } from '../actions/LoginAction'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";

const CreateBusService = (props) => {
   const history=useHistory();

    const [bus, setBus] = useState({
        Operator: '',
        Category: '',
        Source:'',
        Destination:'',
        JourneyDate:'',
        Fare:'',
        Seats:'',
        arDate:'',dtime:'',atime:''

    })
    let setValues = (e) => setBus({ ...bus, [e.target.name]: e.target.value })
    const {Operator,Category,Source,Destination,JourneyDate,Fare,Seats,arDate,dtime,atime}=bus
    const formSubmit = (e) => {
        console.log("hi")
        e.preventDefault();
        props.addbus(bus);
        alert("Added");
   history.push('/oplogin')

document.getElementById("ab").reset();      

 }
    return !props.isAuthenticated ? (<Redirect to="/oplogin" />) : (<div><Logout/>

<div className="ticketapp1">   
            
            <form id="ab" onSubmit={formSubmit}>
            <h5 className="modal-title">Add Bus Route</h5><br/>

                <div className='row'>
                
                <div className='col'>
                <div className='form-group'>
                    <input type="text" className='form-control'
                       value={Operator} name='Operator' onChange={setValues} placeholder="Operator" ></input>
                </div>    </div>            <div className='col'>

                <div className='form-group'>
                    <input type="text" className='form-control'  placeholder="Category" value={Category} name='Category' onChange={setValues}></input>
                </div>           </div>  </div>                 <div className='row'>
   <div className='col'>
<div className='form-group'>
<input type="date"   placeholder='Departure' className="form-control"  value={JourneyDate} name='JourneyDate' onChange={setValues}/>
                </div>      </div>   <div className='col'>
<div className='form-group'>
<input type="date"   placeholder='Arrival ' className="form-control"  value={arDate} name='arDate' onChange={setValues}/>
                </div>      </div><div className='row'> <div className='col'>
<div className='form-group'>
<input type="time"   placeholder='Departure ' className="form-control"  value={dtime} name='dtime' onChange={setValues}/>
                </div>      </div>  <div className='col'>
<div className='form-group'>
<input type="time"   placeholder='Arrival ' className="form-control"  value={atime} name='atime' onChange={setValues}/>
                </div>      </div>    </div>     <div className='col'>

                <div className='form-group'>
                    <input type="text"  placeholder="Source" className='form-control' value={Source} name='Source' onChange={setValues}></input>
                </div>       </div> </div>   <div className='row'>       <div className='col'>

                <div className='form-group'>
                    <input type="text" className='form-control' placeholder="Destination" value={Destination} name='Destination' onChange={setValues}></input>
                </div>         </div>       <div className='col'>

                <div className='form-group'>
                    <input type="text" placeholder="Fare" className='form-control'value={Fare} name='Fare' onChange={setValues}></input>
                </div>           </div>    </div> <div className='row'> <div className='col'>

                <div className='form-group'>
                    <input type="text" placeholder="SeatCount" className='form-control'value={Seats} name='Seats' onChange={setValues}></input>
                </div>   </div>             <div className='col'><div className='form-group'>

                <button type="submit" className='btn btn-primary form-control'>Submit  </button>
            </div></div></div></form>
        </div>
        </div>
   
    )
}
const mapStatetoProps = state => ({
    isAuthenticated: state.login.isAuthenticated
})


export default connect(mapStatetoProps, { login,addbus })(CreateBusService);
