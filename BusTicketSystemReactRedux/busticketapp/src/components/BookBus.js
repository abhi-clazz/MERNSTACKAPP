import { useState } from "react";
import React from 'react'
import UserLogout from "./UserLogout";
// import{bookBus} from '../actions/busAction'
// import { connect } from "react-redux";

   
const BookBus = (props) => {
    //const history=useHistory();
    const [booking, setBooking] = useState({
        Name: '',
        p1:'',p2:'',g1:'',g2:'',g3:'',
        Contact: '',
        Email:'',
        Service_Id:props.location.data[0]._id,
        address:'',
        Fare:props.location.data[0].Fare,
        JourneyDate:props.location.data[0].JourneyDate,
        arDate:props.location.data[0].ArrivalDate,
        dtime:props.location.data[0].Departure,atime:props.location.data[0].Arrival,
        Seat:props.location.data[2],
        Category:props.location.data[0].Category,Operator:props.location.data[0].Operator,
        User_ID:props.location.data[1],Source:props.location.data[0].Source,
        Destination:props.location.data[0].Destination,
        n:props.location.data[3]

    })
    let a=props.location.data[3]
console.log(props.location.data[3])
    let setValues = (e) =>{
     setBooking({ ...booking, [e.target.name]: e.target.value })}
    const {Name,p1,p2,Contact,Email,address}=booking
    const formSubmit = (e) => {
        e.preventDefault();
        console.log("hi");
        //props.bookBus(booking);
        
       props.history.push({
             pathname: '/pay',
            data:[booking,a] // your data array of objects
         })
        
        //history.push('/pay')

 }  
 let comp=null; let comp1=null;
 if(a>1)
 {
     comp=  <div className='form-group'>
     <input type="text" className='form-control'
        value={p1} name='p1' placeholder='Passenger1' onChange={setValues} ></input>

 <input type="radio" 
 value="Male" name='g2'  onChange={setValues} ></input> &nbsp;Male &nbsp;
 <input type="radio" 
 value="Female" name='g2' onChange={setValues} ></input> &nbsp;Female &nbsp;
</div>
 }
 if(a>2)
 {
     comp1=  <div className='form-group'>
     <input type="text" className='form-control'
        value={p2} name='p2' placeholder='Passenger2' onChange={setValues} ></input> <input type="radio" 
        value="Male" name='g3'  onChange={setValues} ></input> &nbsp;Male &nbsp;
        <input type="radio" 
        value="Female" name='g3' onChange={setValues} ></input> &nbsp;Female &nbsp;
 </div>
 }
 
    return  <div>  <UserLogout/>    <div className=' ticketapp'>
    <form id="ab" onSubmit={formSubmit}>

      
       
     
      

        <div className='form-group'>
                    <input type="text" className='form-control'
                       value={Name} name='Name' placeholder='Passenger Name' onChange={setValues} ></input>
                        <input type="radio" 
 value="Male" name='g1'  onChange={setValues} ></input> &nbsp;Male &nbsp;
 <input type="radio"
 value="Female" name='g1' onChange={setValues} ></input> &nbsp;Female &nbsp;
                </div>
             
               {comp}
               {comp1}
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='MobileNumber' value={Contact} name='Contact' onChange={setValues}></input>
                </div> <div className='form-group'>
                    <input type="text" placeholder='Email' className='form-control' value={Email} name='Email' onChange={setValues}></input>
                </div>
                
                <div className='form-group'>
                    <input type="text" placeholder="Address" className='form-control' value={address} name='address' onChange={setValues}></input>
                </div>
              
                <button type="submit" className='btn btn-primary'>Book </button>

        
        </form>
</div></div> 
}



export default BookBus;
