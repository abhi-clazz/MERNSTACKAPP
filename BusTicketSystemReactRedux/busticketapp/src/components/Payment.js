import React from 'react';
import Cards from 'react-credit-cards';import 'react-credit-cards/es/styles-compiled.css'
import{bookBus,updateSeats} from '../actions/busAction'
import { connect } from "react-redux";
  class Payment extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        /> <div className="ticketapp">
        <form onSubmit={()=>{console.log(this.props.location.data);
            this.props.bookBus(this.props.location.data[0]);
            this.props.updateSeats({bidd:this.props.location.data[0].Service_Id,c1:this.props.location.data[1]})
           this.props.history.push({pathname:'/bcon',data:[this.props.bdat]}) }}>
             <div className="form-group">
        	<input
            type="tel"
            name="number" className="form-control"
            placeholder="Card Number" required
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /></div>
                       <div className="form-group">

                <input
            type="text"
            name="name"
            placeholder="Card HolderName" className="form-control"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus} required
          /></div>
                       <div className="form-group">

          <input
            type="tel"
            name="expiry"
            placeholder="Expiry" className="form-control"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /></div>
                       <div className="form-group">

          
           <input
            type="password"
            name="cvc"
            placeholder="CVC" className="form-control"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          </div>
          <button type="submit">Proceed</button>
        </form></div>
      </div>
    );
  }
}


export default connect(null,{bookBus,updateSeats}) (Payment)