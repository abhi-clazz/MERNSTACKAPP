import { useState } from "react";
import { getSeats } from '../actions/busAction'
import { login } from '../actions/LoginAction'
// import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import '../Sty.css'
import { MdDirectionsBus } from "react-icons/md";
// import UserLogout from "./UserLogout";
const BusInfo = (props) => {

  let bus = props.busDetails;

  const [sid] = useState({
    Service_Id: bus._id

  })
  console.log(sid)
  //    const dispatch=useDispatch()
  //     props.getSeats(sid)
  //     let setValues = (e) => setSid({ ...sid, [e.target.name]: e.target.value })
  //     const { idd } = sid;
  // useEffect(() => {
  //     props.getSeats({Service_Id: bus._id})
  //     }
  // )
  const history = useHistory();
  const postsubmit = (e) => {
    // console.log(sid)

    e.preventDefault()
    // dispatch(getSeats({Service_Id: bus._id}))

    // props.getSeats({Service_Id: bus._id})
    const a = [];
    axios.get(`http://localhost:4000/busticketing/aseats/${bus._id}`)
      .then(res => {
        if (res.data.length > 0) {
          console.log(res.data.length);
          history.push({ pathname: '/seat1', data: [bus, props.iddk, res.data] })
          console.log(res.data[0].Seat)
        }
        else {
          console.log(res.data.length)
          history.push({ pathname: '/new', data: [bus, props.iddk, "res.data"] })
        }
      }).catch(function (error) {


      })

    console.log(bus._id + " is")
    console.log(a)

    console.log(props.SeatList)

  }

  return (
    <div className=' Sty container   somee    ' >
      <br />

      <form onSubmit={postsubmit}>

        <div></div>
        <br />
        <main>
          <div className="">
            <section className="">
              <section className="busdata">
                <article className="bookbus busdatamember">
                  <div className="bustickets">


                  </div>
                  <div className="dep">
                    <time className="traveltime">{bus.Departure}</time>
                    <h6 className="place">{bus.Source}</h6>
                    <time className="travelday">{bus.JourneyDate}</time>
                  </div>
                  <div className="operatingroute">

                    <p className="dur"><MdDirectionsBus />{bus.Category}---{bus.Operator}</p>

            

                    <p className="seat">{bus.Seats} Seats Available</p>
                  </div>
                  <div className="arr">
                    <time className="traveltime">{bus.Arrival}</time>
                    <h6 className="place">{bus.Destination}</h6>
                    <time className="travelday">{bus.ArrivalDate}</time>
                  </div>
                  {bus.Seats > 0 ? <div className="bookbusPerform">
                    <sup></sup>{bus.Fare} <sub><b>INR</b></sub><br /><br />
                    <button className="bot">Select</button>
                  </div> : ''}</article></section>
              <div classNameName="">
              </div></section></div></main>

        <br /></form></div>
  )
}
const mapStatetoProps = state => (
  {
    iddk: state.login.idd,
    SeatList: state.bus.SeatList,
    isloaded: state.bus.isloaded


  }

)
export default connect(mapStatetoProps, { getSeats, login })(BusInfo)
