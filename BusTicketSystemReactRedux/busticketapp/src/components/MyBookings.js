import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import { viewbookings } from '../actions/busAction'
const MyBookings = (props) => {
    return  props.mybookings.length>0? <div>


<div className='container'><table className="table table-striped table-hover">
               <thead><tr>
                    <th>BookingId</th>
                        <th>Service_ID</th>
                        <th>User_ID</th>
                        <th>Source</th>

                        <th>Destination</th>
                        <th>JourneyDate</th>
                        <th>Fare</th>
                        <th>Seat</th></tr></thead>
                <tbody>

                    {
                        
                    props.mybookings.map(bus =>(
                <tr key={bus._id}>

                        <td>{bus._id}</td>
                        <td>{bus.Service_Id}</td>
                        <td>{bus.User_ID}</td>
                        <td>{bus.Source}</td>

                        <td>{bus.Destination}</td>
                        <td>{bus.JourneyDate}</td>
                        <td>{bus.Fare}</td>
                        <td>{bus.Seat}</td>

                       
                            </tr>))}
                            </tbody></table></div>  </div> : props.mybookings.length===0?<div className='loader'></div>:<div >no bookings</div>
}

const mapStatetoProps = state => (
    {
        mybookings: state.bus.mybookings,

    }

)
        
 

export default connect(mapStatetoProps,{viewbookings}) (MyBookings)
