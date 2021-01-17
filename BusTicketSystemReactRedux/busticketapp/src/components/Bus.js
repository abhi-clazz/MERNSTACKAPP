import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getBuses } from '../actions/busAction'
import { login } from '../actions/LoginAction'
//import moment from 'moment';

import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
//import DatePicker from "react-datepicker";
 
import 'react-datepicker/dist/react-datepicker.css'
import UserLogout from "./UserLogout"
const Bus = (props) => {
    //const [startDate, setStartDate] = useState(new Date());
  //  console.log(props.idd)
    const[bus, setBus]= useState({
        source:'',
        destination:'',
        journeyDate:''
    })
    let setValues=(e)=>setBus({...bus,[e.target.name]: e.target.value })
    const{source,destination,journeyDate}=bus;
    const history=useHistory();
    const formSubmit = (e) => {
        e.preventDefault()

      props.getBuses(bus);
    
        //history.push('/availbus')
        history.push({pathname: '/availbus',data:[bus]})
    }
    
    return  !props.isAuthenticated1 ? (<Redirect to="/userlogin" />):(<div className='dut'><UserLogout/>
            <p className="text-center"> </p>
            <div className=" ticketapp ">                 <form onSubmit={formSubmit}>
                   <h5 className="modal-title">Book Bus </h5><br/>
 <div className='row'>
 <div className='col'>
 <div className="form-group">
  <select className="form-control"  value={source} name='source' onChange={setValues} id="source">
      <option disabled hidden value=''> Source</option>
    <option   value="Hyderabad">Hyderabad</option>
    <option value="Chennai">Chennai</option>
    <option value="Pune">Pune</option>
    <option value="Mumbai">Mumbai</option>

    <option value="Bengaluru">Bengaluru</option><option value="Cochin">Cochin</option><option value="Vizag">Vizag</option>
  </select>
</div>
</div> <div className='col'>

<div className="form-group">
  <select className="form-control"  value={destination} name='destination' onChange={setValues} id="source">
      <option disabled hidden value=''>Select Destination</option>
    <option   value="Hyderabad">Hyderabad</option>
    <option value="Chennai">Chennai</option>
    <option value="Mumbai">Mumbai</option>

    <option value="Pune">Pune</option><option value="Bengaluru">Bengaluru</option><option value="Cochin">Cochin</option><option value="Vizag">Vizag</option>
  </select>
</div>
</div>
           
                   <div className='col'><div className="form-group"> 
                  <input type="date"   placeholder='enter date'  min={new Date().toISOString().split('T')[0]} className="form-control"  value={journeyDate} name='journeyDate' onChange={setValues}/>

              </div></div></div>
                    <button type="submit" className='btn btn-primary'>Search</button>
                </form>
            </div>
            </div>
    
    )}

    const mapStatetoProps = state => ({
        isAuthenticated1: state.login.isAuthenticated1,
    })
export default connect(mapStatetoProps,{ login,getBuses })(Bus);
