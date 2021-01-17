import React, { Component } from 'react';
//import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
//import { useHistory } from "react-router-dom";
import {getSeats } from './actions/busAction'
// import { Redirect} from 'react-router-dom'

// import { login } from './actions/LoginAction'
class SeatSelection extends Component {
    
// componentDidMount()
// {
//   this.props.getSeats(this.state.sid)
// }
// componentDidUpdate()
// {
//   this.props.getSeats(this.state.sid)
// }

  state = {seat1A:false,seat1B:false,seat1C:false,seat1D:false,
    seat2A:false,seat2B:false,seat2C:false,seat2D:false,
    seat3A:false,seat3B:false,seat3C:false,seat3D:false,
    seat4A:false,seat4B:false,seat4C:false,seat4D:false,
    seat5A:false,seat5B:false,seat5C:false,seat5D:false,
    seat6A:false,seat6B:false,seat6C:false,seat6D:false,
    seat7A:false,seat7B:false,seat7C:false,seat7D:false,
    seat8A:false,seat8B:false,seat8C:false,seat8D:false,
    seat9A:false,seat9B:false,seat9C:false,seat9D:false}



   dt22= this.props.SeatList.map((sea)=>({Seat:sea.Seat}))
   comp=<div>hi</div>

  
   dt=this.props.location.data[0];
   odd=this.props.location.data[1];
   dt2=this.props.location.data[2];

   check2(x)
   {
     var v=null;
     if(x>1)
     v=1
    
     return v
   }

   
  toggleChange1A = () => {
    this.setState(k => ({
      seat1A: !k.seat1A,
    }));
  }
  toggleChange1B = () => {
    this.setState(k => ({
      seat1B: !k.seat1B,
    }));
  }
  toggleChange1C = () => {
    this.setState(k => ({
      seat1C: !k.seat1C,
    }));
  }
  toggleChange1D = () => {
    this.setState(k => ({
      seat1D: !k.seat1D,
    }));
  }
  toggleChange2A = () => {
    this.setState(k => ({
      seat2A: !k.seat2A,
    }));
  }
  toggleChange2B = () => {
    this.setState(k => ({
      seat2B: !k.seat2B,
    }));
  }
  toggleChange2C = () => {
    this.setState(k => ({
      seat2C: !k.seat2C,
    }));
  }
  toggleChange2D = () => {
    this.setState(k => ({
      seat2D: !k.seat2D,
    }));
  }
  toggleChange3A = () => {
    this.setState(k => ({
      seat3A: !k.seat3A,
    }));
  }
  toggleChange3B = () => {
    this.setState(k => ({
      seat3B: !k.seat3B,
    }));
  }
  toggleChange3C = () => {
    this.setState(k => ({
      seat3C: !k.seat3C,
    }));
  }
  toggleChange3D = () => {
    this.setState(k => ({
      seat3D: !k.seat3D,
    }));
  }
  toggleChange4A = () => {
    this.setState(k => ({
      seat4A: !k.seat4A,
    }));
  }
  
  toggleChange4B = () => {
    this.setState(k => ({
      seat4B: !k.seat4B,
    }));
  }
  toggleChange4C = () => {
    this.setState(k => ({
      seat4C: !k.seat4C,
    }));
  }
  toggleChange4D = () => {
    this.setState(k => ({
      seat4D: !k.seat4D,
    }));
  }
  toggleChange5A = () => {
    this.setState(k => ({
      seat5A: !k.seat5A,
    }));
  }
  
  toggleChange5B = () => {
    this.setState(k => ({
      seat5B: !k.seat5B,
    }));
  }
  toggleChange5C = () => {
    this.setState(k => ({
      seat5C: !k.seat5C,
    }));
  }
  toggleChange5D = () => {
    this.setState(k => ({
      seat5D: !k.seat5D,
    }));
  }

  toggleChange6A = () => {
    this.setState(k => ({
      seat6A: !k.seat6A,
    }));
  }
  
  toggleChange6B = () => {
    this.setState(k => ({
      seat6B: !k.seat6B,
    }));
  }
  toggleChange6C = () => {
    this.setState(k => ({
      seat6C: !k.seat6C,
    }));
  }
  toggleChange6D = () => {
    this.setState(k => ({
      seat6D: !k.seat6D,
    }));
  }

  toggleChange7A = () => {
    this.setState(k => ({
      seat7A: !k.seat7A,
    }));
  }
  
  toggleChange7B = () => {
    this.setState(k => ({
      seat7B: !k.seat7B,
    }));
  }
  toggleChange7C = () => {
    this.setState(k => ({
      seat7C: !k.seat7C,
    }));
  }
  toggleChange7D = () => {
    this.setState(k => ({
      seat7D: !k.seat7D,
    }));
  }

  toggleChange8A = () => {
    this.setState(k => ({
      seat8A: !k.seat8A,
    }));
  }
  
  toggleChange8B = () => {
    this.setState(k => ({
      seat8B: !k.seat8B,
    }));
  }
  toggleChange8C = () => {
    this.setState(k => ({
      seat8C: !k.seat8C,
    }));
  }
  toggleChange8D = () => {
    this.setState(k => ({
      seat8D: !k.seat8D,
    }));
  }

  toggleChange9A = () => {
    this.setState(k => ({
      seat9A: !k.seat9A,
    }));
  }
  
  toggleChange9B = () => {
    this.setState(k => ({
      seat9B: !k.seat9B,
    }));
  }
  toggleChange9C = () => {
    this.setState(k => ({
      seat9C: !k.seat9C,
    }));
  }
  toggleChange9D = () => {
    this.setState(k => ({
      seat9D: !k.seat9D,
    }));
  }
  check1(x)
  {      

    var v=null;
    for(var i=0;i<this.dt2.length;i++)
    {
      if(this.dt2[i].Seat.includes(x))  
v=1    
   
    
       
     }
     return v
  }
   compp=null
  err = (e) => {
    console.log("hh")
   e.preventDefault()
   alert("please select seat")

  }
 
  onSubmit = (e) => {
   
      e.preventDefault();
    let arr = [];
    for (var key in this.state) {
      if(this.state[key] === true) {
        arr.push(key);
      }
    }
    let data = {
      check: arr.toString() 
    };

    console.log(data[1])
    this.props.history.push({
        pathname: '/bookbus',
        data:[ this.dt,this.odd, arr.toString(),document.querySelectorAll('#checkboxgroup input[type="checkbox"]:checked').length] // your data array of objects
      })
    
  }

  render() {    
   //const comp=<div>hi</div>

   function okkk()
   {
    var checkboxgroup = document.getElementById('checkboxgroup').getElementsByTagName('input')
    var limit = 3; 
    for (var i = 0; i < checkboxgroup.length; i++) {
      checkboxgroup[i].onclick = function() 
      {
        var checkedcount = 0;
          for (var i = 0; i < checkboxgroup.length; i++) 
          {
          checkedcount += (checkboxgroup[i].checked) ? 1 : 0;
        }
       
        if (checkedcount > limit) 
        {
          console.log("You can select maximum of " + limit + " seats.");
          alert("You can book maximum of " + limit + " seats.");
          this.checked = false;
        }
console.log(checkedcount)      }

    }

   }
   var a=(document.querySelectorAll('#checkboxgroup input[type="checkbox"]:checked').length);
// const z=1
    console.log(a)
 //   let loading = true;
//console.log(this.dt22)
    if (this.props.SeatList.length>0) {
      //  loading = false;
    }
    // let x=0;
    // let b=false;
   
   //this.props.getSeats(this.state.sid)
    return this.props.location.data? <div className='  ticketapp'>
{/* {this.z===2?<div><div className='loader'>hhh</div></div>:''}
//{this.compp} */}
        <form onSubmit = {a>0?this.onSubmit:this.err}>
        <div  className='row' id="checkboxgroup"  onChange={okkk}>
        <div className='col'>
        <ul>
 
    <input type="checkbox"   value={"seat1A"} name='seat1A'  disabled={this.check1("seat1A")===1?true:false}  onChange={this.toggleChange1A}/>&nbsp;&nbsp;
    <input type="checkbox" value={"seat1B"} name='seat1B' disabled={this.check1("seat1B")===1?true:false} onChange={this.toggleChange1B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"1C"} name='seat1C' disabled={(this.check1("seat1C")===1)?true:false} onChange={this.toggleChange1C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"1D"} name='seat1D'  disabled={(this.check1("seat1D")===1)?true:false}onChange={this.toggleChange1D}/>   
   </ul>   <ul>
   <input type="checkbox"   value={"2A"} name='seat2A' disabled={(this.check1("seat2A")===1)?true:false} onChange={this.toggleChange2A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"2B"} name='seat2B'  disabled={(this.check1("seat2B")===1)?true:false}onChange={this.toggleChange2B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"2C"} name='seat2C' disabled={(this.check1("seat2C")===1)?true:false} onChange={this.toggleChange2C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"2D"} name='seat2D'  disabled={(this.check1("seat2D")===1)?true:false} onChange={this.toggleChange2D}/>    
   </ul>   <ul>
   <input type="checkbox"   value={"3A"} name='seat3A' disabled={(this.check1("seat3A")===1)?true:false} onChange={this.toggleChange3A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"3B"} name='seat3B' disabled={(this.check1("seat3B")===1)?true:false} onChange={this.toggleChange3B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"3C"} name='seat3C' disabled={(this.check1("seat3C")===1)?true:false} onChange={this.toggleChange3C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"3D"} name='seat3D' disabled={(this.check1("seat3D")===1)?true:false}  onChange={this.toggleChange3D}/>    
   </ul>   <ul>
   <input type="checkbox"   value={"4A"} name='seat4A' disabled={(this.check1("seat4A")===1)?true:false}  onChange={this.toggleChange4A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"4B"} name='seat4B' disabled={(this.check1("seat4B")===1)?true:false}  onChange={this.toggleChange4B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"4C"} name='seat4C' disabled={(this.check1("seat4C")===1)?true:false}  onChange={this.toggleChange4C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"4D"} name='seat4D' disabled={(this.check1("seat4D")===1)?true:false} onChange={this.toggleChange4D}/>    
   </ul>   <ul>
   <input type="checkbox"   value={"5A"} name='seat5A' disabled={(this.check1("seat5A")===1)?true:false}  onChange={this.toggleChange5A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"5B"} name='seat5B'  disabled={(this.check1("seat5B")===1)?true:false} onChange={this.toggleChange5B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"5C"} name='seat5C' disabled={(this.check1("seat5C")===1)?true:false} onChange={this.toggleChange5C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"5D"} name='seat5D' disabled={(this.check1("seat5D")===1)?true:false}  onChange={this.toggleChange5D}/>   
   </ul>   <ul>
   <input type="checkbox"   value={"6A"} name='seat6A' disabled={(this.check1("seat6A")===1)?true:false}  onChange={this.toggleChange6A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"6B"} name='seat6B'disabled={(this.check1("seat6B")===1)?true:false}  onChange={this.toggleChange6B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"6C"} name='seat6C'disabled={(this.check1("seat6C")===1)?true:false}  onChange={this.toggleChange6C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"6D"} name='seat6D'disabled={(this.check1("seat6D")===1)?true:false}  onChange={this.toggleChange6D}/>   
   </ul>   <ul>
   <input type="checkbox"   value={"7A"} name='seat7A' disabled={(this.check1("seat7A")===1)?true:false}  onChange={this.toggleChange7A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"7B"} name='seat7B'disabled={(this.check1("seat7B")===1)?true:false}  onChange={this.toggleChange7B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"7C"} name='seat7C' disabled={(this.check1("seat7C")===1)?true:false} onChange={this.toggleChange7C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"7D"} name='seat7D' disabled={(this.check1("seat7D")===1)?true:false} onChange={this.toggleChange7D}/>   
   </ul> 
   <ul>
   <input type="checkbox"   value={"8A"} name='seat8A'disabled={(this.check1("seat8A")===1)?true:false}  onChange={this.toggleChange8A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"8B"} name='seat8B'disabled={(this.check1("seat8B")===1)?true:false}  onChange={this.toggleChange8B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"8C"} name='seat8C'disabled={(this.check1("seat8C")===1)?true:false}  onChange={this.toggleChange8C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"8D"} name='seat8D'disabled={(this.check1("seat8D")===1)?true:false}  onChange={this.toggleChange8D}/>   
   </ul>  <ul>
   <input type="checkbox"   value={"9A"} name='seat9A' disabled={(this.check1("seat9A")===1)?true:false} onChange={this.toggleChange9A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"9B"} name='seat9B' disabled={(this.check1("seat9B")===1)?true:false} onChange={this.toggleChange9B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"9C"} name='seat9C'disabled={(this.check1("seat9C")===1)?true:false}  onChange={this.toggleChange9C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"9D"} name='seat9D'disabled={(this.check1("seat9D")===1)?true:false}  onChange={this.toggleChange9D}/>  
   </ul>
  

          <div className="form-group">
            <button className="btn btn-primary">
              Select seat
            </button></div></div>
            </div>
        </form>
        { a>0?<div className='col'>fare:{this.dt.Fare*(a)}</div>:''}
        <div>
   <input type="checkbox"  aria-describedby="cc"  value={"un"} name='un' disabled={true} />Unavailable
    <input type="checkbox"  readOnly  checked ={false} value={"av"} name='av'/  >available
    <input type="checkbox"  value={"se"}  readOnly name='se' checked={true} /> Selected
    </div> 
    <div>
    {this.x===1? <div><div className='form-group'>
                    <input type="text" className='form-control'
                      name='Name' placeholder='Name' ></input>
                </div>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='MobileNumber'  name='Contact' ></input>
                </div> <div className='form-group'>
                    <input type="text" placeholder='Email' className='form-control'  name='Email' ></input>
                </div>
                {/* <div className='form-group'>
                    <label>Service_Id</label>
                    <input type="text" className='form-control' value={Service_Id} name='Service_Id' onChange={setValues}></input>
                </div> */}
                <div className='form-group'>
                    <input type="text" placeholder="Address" className='form-control'  name='address' ></input>
                </div></div>:(<div></div>)}</div></div>   :<div>okkk</div>

    
  }
}
function mapStatetoProps(state) {
    return (
        {
            BusList: state.bus.BusList,
            isAuthenticated1: state.login.isAuthenticated1,
            idd: state.login.idd,
           SeatList:state.bus.SeatList,
           isloaded:state.bus.isloaded

        });
      }

export default connect(mapStatetoProps,{getSeats})(SeatSelection);
