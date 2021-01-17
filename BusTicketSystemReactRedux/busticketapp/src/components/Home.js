import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getBus } from '../actions/busAction'
// import { login } from '../actions/LoginAction'
// //import moment from 'moment';

import { connect } from "react-redux";
// import { Redirect } from 'react-reactrouter-dom'
// //import DatePicker from "-datepicker";
 
import 'react-datepicker/dist/react-datepicker.css'
////import UserLogout from "./UserLogout"
const Home = (props) => {
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

      props.getBus(bus);
    
        //history.push('/availbus')
        history.push({pathname: '/busdata',data:[bus]})
    }
    
    return <div className='dut'>
    <br/>    <br/>
    <br/>
    <br/>    <br/>
    <br/>
    


            <div className="ticketapp1">                 <form onSubmit={formSubmit}>
                   <h5 className="modal-title">Book Bus </h5><br/>
 <div className='row'>
 <div className='col'>
 <div className="form-group">
  <select className="form-control"  value={source} name='source' onChange={setValues} id="source">
      <option disabled hidden value=''> Source</option>
    <option   value="Hyderabad">Hyderabad</option>
    <option value="Chennai">Chennai</option>
    <option value="Pune">Pune</option>
    <option value="Bengaluru">Bengaluru</option><option value="Cochin">Cochin</option><option value="Vizag">Vizag</option>
  </select>
</div>
</div> <div className='col'>

<div className="form-group">
  <select className="form-control"  value={destination} name='destination' onChange={setValues} id="source">
      <option disabled hidden value=''> Destination</option>
    <option   value="Hyderabad">Hyderabad</option>
    <option value="Chennai">Chennai</option>
    <option value="Pune">Pune</option><option value="Bengaluru">Bengaluru</option><option value="Cochin">Cochin</option><option value="Vizag">Vizag</option>
  </select>
</div>
</div>
            {/* <div className='col'>
            <div className="form-group">

                        <input type="text" className="form-control" placeholder="From" value={source} name='source' onChange={setValues}></input>&nbsp;&nbsp;
                       </div> </div> 

                       <div className='col'><div className="form-group">
  <input type="text" placeholder="To"className="form-control"  value={destination} name='destination' onChange={setValues}></input>&nbsp;&nbsp;
                  </div></div>   */}
                   <div className='col'><div className="form-group"> 
                  <input type="date"   placeholder='enter date'  min={new Date().toISOString().split('T')[0]} className="form-control"  value={journeyDate} name='journeyDate' onChange={setValues}/>

              </div></div></div>
                    <button type="submit" className='btn btn-primary'>Find Buses</button>
                </form>
            </div>
            </div>
    
                }

   
export default connect(null,{ getBus })(Home);
