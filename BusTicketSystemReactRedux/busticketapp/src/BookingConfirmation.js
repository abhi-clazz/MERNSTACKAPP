import React from 'react'
import{bookBus} from './actions/busAction'
import { connect } from "react-redux";
// import { userlogout } from './actions/LoginAction';
import UserLogout from './components/UserLogout';
import {  MdAirlineSeatReclineNormal, MdArrowForward, MdDirectionsBus, MdPerson } from "react-icons/md";

const BookingConfirmation = (props) => {
    console.log(props.bdat) 
const a=props.bdat.length-1
    return (<div><UserLogout/>
        <div className='  dut' >

               { props.bdat.length>0 ?

 <div className="col-sm-5 container"><br/>
<br/>

            <div className="card jumbotron">
            <div className="card-body ">
                <h5 className="card-title">Booking Confirmation</h5>
                <hr></hr>
                <p className="card-text "> <i>{props.bdat[a].Source}<MdArrowForward style={{color:'blue',width:'8rem'}}/>{props.bdat[a].Destination}</i></p>
                <hr></hr>

                <table className='container jumbotron' >
   <tr><td>               <b>Booking Id:</b> </td><td>   {props.bdat[a]._id}</td></tr>
                <tr><td>                <MdPerson style={{color:'turquoise'}}/> <b>Traveller: </b></td><td> {props.bdat[a].Name}
</td></tr>

                <tr><td>                 <MdDirectionsBus/> <b>Service: </b></td><td>{props.bdat[a].Service_Id}</td>
</tr>

                <tr><td>                <b>Departure: </b></td><td>{props.bdat[a].JourneyDate}---{props.bdat[a].Departure}
</td></tr>

                <tr><td><b>Seat Details </b><MdAirlineSeatReclineNormal/>  </td><td>{props.bdat[a].Seat}</td></tr>


                


                </table>


            
               </div>
            </div>
         </div>
        
     
:<div><div > <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-light" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
        <span className="sr-only">Loading...</span></div></div>}
  </div></div>
    )
}
const mapStatetoProps = state => ({
    bdat:state.bus.BookingList
   
   })
   export default connect(mapStatetoProps,{bookBus}) (BookingConfirmation)
