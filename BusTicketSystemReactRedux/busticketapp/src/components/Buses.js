import { connect } from 'react-redux'
import { getBus } from '../actions/busAction'
import { Component } from 'react';
    class Buses extends Component {
render()
{    
        return this.props.BusList.length>0? <div >
         <table  className="table table-striped table-hover">
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

                    </tr>
                </thead>
                <tbody>
                    {
                        
                        this.props.BusList.map(bus =>(
                <tr key={bus._id}>
<input type="hidden" value={bus._id} disabled/>
<td>{bus._id}</td><td>{bus.Category}</td>
                     <td>{bus.Operator}</td>
                        <td>{bus.Source}</td>
                        <td>{bus.Destination}</td>
                        <td>{bus.JourneyDate}</td>
                        <td>{bus.ArrivalDate}</td>
                        <td>{bus.Departure}</td>
                        <td>{bus.Arrival}</td>

                        <td>{bus.Fare}</td>
                        <td>{bus.Seats}</td>

                            
                                
                  
                </tr>                    
                    ))
                    }</tbody>
               </table> </div>:<div className='loader'>No Route</div>
    }

  }
const mapStatetoProps = state => (
    {
        BusList: state.bus.BusList1,
      // SeatList:state.bus.SeatList1
      


    }

)

export default connect(mapStatetoProps, {getBus })(Buses);