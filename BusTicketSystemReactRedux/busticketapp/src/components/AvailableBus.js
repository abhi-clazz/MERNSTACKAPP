import { connect } from 'react-redux'
import { getBuses } from '../actions/busAction'
import { login } from '../actions/LoginAction'
import { Redirect } from 'react-router-dom'
import UserLogout from './UserLogout.js'
//import { useHistory } from "react-router-dom";

import { Component } from 'react';
import BusInfo from './BusInfo'

   

    
     class AvailableBus extends Component {

    render(){
        let loading = true;

        if (this.props.BusList.length>0) {
            loading = false;
        }
    
        return( !this.props.isAuthenticated1 ? (<Redirect to="/userlogin" />)  : loading ? <div className='loader'>no route</div> :<div><UserLogout/>
      {/* <table  className="table table-striped table-hover">
                    <thead>
                        <tr>
                        <th>Service</th>
                        <th>Coach </th>
                        <th>Operator</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Departure Date</th>
                        <th>Arrival Date</th>
                        <th> Departure </th>
                        <th> Arrival </th>

                        <th>Fare</th>
                        <th>Seats</th>
                        <th>action</th>
                        </tr>
                        </thead>
                        </table> */}
                        {/* <div className='row'>
                             <div className="col">id</div>
            <div className="col">Category</div>
 <div className="col">Operator</div>
            <div className="col">Source</div>
<div className="col">Destination</div>
<div className="col-md">JourneyDate</div>
<div className="col-md-small">ArrivalDate</div>
<div className="col">Departure</div>
<div className="col">Arrival</div>
<div className="col">Fare</div>
<div className="col">Seats</div>
<div className="col" >action
                           </div>
                           </div> */}
                    {
                        
                        this.props.BusList.map(bus =>( 
                        <BusInfo key={bus._id} busDetails={bus}  />
                        ))} 
               </div>
        )
    }
}
    

const mapStatetoProps = state => (
    {
        BusList:state.bus.BusList,
        isAuthenticated1: state.login.isAuthenticated1,
        idd:state.login.idd,
       //SeatList:state.bus.SeatList
        


    }

)

export default connect(mapStatetoProps,{getBuses,login })(AvailableBus);