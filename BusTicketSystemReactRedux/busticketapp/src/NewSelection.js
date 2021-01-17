import React, { Component } from 'react';
//import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
//import { useHistory } from "react-router-dom";
import { getSeats } from './actions/busAction'
//import { withRouter} from 'react-router-dom'

//import { login } from './actions/LoginAction'
class NewSelection extends Component {
    
// componentDidMount(props)
// {
//   this.props.getSeats(this.state.sid)
// }
// componentDidUpdate()
// {
//   this.props.getSeats(this.state.sid)}
//sid:{Service_Id:this.props.location.data[2]},
  state = {seat1A:false,seat1B:false,seat1C:false,seat1D:false,
    seat2A:false,seat2B:false,seat2C:false,seat2D:false,
    seat3A:false,seat3B:false,seat3C:false,seat3D:false,
    seat4A:false,seat4B:false,seat4C:false,seat4D:false,
    seat5A:false,seat5B:false,seat5C:false,seat5D:false,
    seat6A:false,seat6B:false,seat6C:false,seat6D:false,
    seat7A:false,seat7B:false,seat7C:false,seat7D:false,
    seat8A:false,seat8B:false,seat8C:false,seat8D:false,
    seat9A:false,seat9B:false,seat9C:false,seat9D:false}



//    dt22= this.props.SeatList.map((sea)=>({Seat:sea.Seat}))

  
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
// //   check1(x)
// //   {      

// //     var v=null;
// //     for(var i=0;i<this.dt22.length;i++)
// //     {
// //       if(this.dt22[i].Seat===x)  
// // v=1    
   
    
       
//      }
//      return v
//   }
err = (e) => {
  e.preventDefault();
 this.dt=<div><div>hhh</div></div>
}
  onSubmit = (e) => {
    //e.preventDefault();
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
    
    //console.log(this.dt22)   const comp=<div>hi</div>

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

    console.log(a)
   // let loading = true;
//console.log(this.dt22)
    if (this.props.SeatList.length>0) {
        //loading = false;
    }
    // let x=0;
    // let b=false;

   //this.props.getSeats(this.state.sid)
    return  <div className='ticketapp'>
             <div id="checkboxgroup"  onChange={okkk}>

        <form onSubmit = {a>0?this.onSubmit:this.err}>
        <div >
        <ul>
 
    <input type="checkbox"  value={"seat1A"} name='seat1A'    onChange={this.toggleChange1A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"seat1B"} name='seat1B'  onChange={this.toggleChange1B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"1C"} name='seat1C'  onChange={this.toggleChange1C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"1D"} name='seat1D'  onChange={this.toggleChange1D}/>   
   </ul>   <ul>
   <input type="checkbox"   value={"2A"} name='seat2A'  onChange={this.toggleChange2A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"2B"} name='seat2B'   onChange={this.toggleChange2B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"2C"} name='seat2C'  onChange={this.toggleChange2C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"2D"} name='seat2D'   onChange={this.toggleChange2D}/>    
   </ul>   <ul>
   <input type="checkbox"   value={"3A"} name='seat3A'  onChange={this.toggleChange3A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"3B"} name='seat3B'  onChange={this.toggleChange3B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"3C"} name='seat3C'  onChange={this.toggleChange3C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"3D"} name='seat3D'    onChange={this.toggleChange3D}/>    
   </ul>   <ul>
   <input type="checkbox"   value={"4A"} name='seat4A'   onChange={this.toggleChange4A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"4B"} name='seat4B'   onChange={this.toggleChange4B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"4C"} name='seat4C'   onChange={this.toggleChange4C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"4D"} name='seat4D'  onChange={this.toggleChange4D}/>    
   </ul>   <ul>
   <input type="checkbox"   value={"5A"} name='seat5A'   onChange={this.toggleChange5A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"5B"} name='seat5B'   onChange={this.toggleChange5B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"5C"} name='seat5C'  onChange={this.toggleChange5C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"5D"} name='seat5D'  onChange={this.toggleChange5D}/>   
   </ul>   <ul>
   <input type="checkbox"   value={"6A"} name='seat6A'   onChange={this.toggleChange6A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"6B"} name='seat6B'  onChange={this.toggleChange6B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"6C"} name='seat6C'  onChange={this.toggleChange6C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"6D"} name='seat6D'  onChange={this.toggleChange6D}/>   
   </ul>   <ul>
   <input type="checkbox"   value={"7A"} name='seat7A'  onChange={this.toggleChange7A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"7B"} name='seat7B'  onChange={this.toggleChange7B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"7C"} name='seat7C' onChange={this.toggleChange7C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"7D"} name='seat7D'  onChange={this.toggleChange7D}/>   
   </ul> 
   <ul>
   <input type="checkbox"   value={"8A"} name='seat8A'  onChange={this.toggleChange8A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"8B"} name='seat8B'  onChange={this.toggleChange8B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"8C"} name='seat8C'  onChange={this.toggleChange8C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"8D"} name='seat8D' onChange={this.toggleChange8D}/>   
   </ul>  <ul>
   <input type="checkbox"   value={"9A"} name='seat9A' onChange={this.toggleChange9A}/>&nbsp;&nbsp;
    <input type="checkbox"  value={"9B"} name='seat9B'  onChange={this.toggleChange9B}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox"  value={"9C"} name='seat9C' onChange={this.toggleChange9C}/> &nbsp;&nbsp;
    <input type="checkbox"  value={"9D"} name='seat9D'  onChange={this.toggleChange9D}/>  
   </ul>
      
          <div className="form-group">
            <button className="btn btn-primary">
              Select seat
            </button></div></div>
        </form>           { a>0?<div className='col'>fare:{this.dt.Fare*(a)}</div>:''}
     </div >
        <div>
        {/* { a>0?<div className='col'>fare:{this.dt.Fare*(a)}</div>:''} */}
        <div>
   <input type="checkbox"  aria-describedby="cc"  value={"un"} name='un' disabled={true} />Unavailable
    <input type="checkbox"  readOnly  checked ={false} value={"av"} name='av'/  >available
    <input type="checkbox"  value={"se"}  readOnly name='se' checked={true} /> Selected
    </div> 
   
    </div>  
        </div>
  
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

export default connect(mapStatetoProps,{getSeats})(NewSelection);
