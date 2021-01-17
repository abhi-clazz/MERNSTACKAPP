import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbar from './Navbar';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Bus from './components/Bus';
import UserLogin from './components/UserLogin';
import OperatorLogin from './components/OperatorLogin';
import CreateBusService from './components/CreateBusService';
import { Provider } from 'react-redux'
import store from './Store'
import Buses from './components/Buses';
import BookBus from './components/BookBus';
import UserLogout from './components/UserLogout';
import Home from './components/Home';

import SeatSelection from './SeatSelection';
import AvailableBus from './components/AvailableBus';
import Payment from './components/Payment';
import UserRegister from './components/UserRegister';
import MyBookings from './components/MyBookings';
import NewSelection from './NewSelection';
import BookingConfirmation from './BookingConfirmation';

 const  App=()=> {
  return    <Provider  store={store}>
 
 <Router>
    <div  className="App   ">
      
   
      <Navbar></Navbar>    
<Route exact path="/bus" component={Bus}></Route>

<Route exact path="/userlogin" component={UserLogin}></Route>
<Route exact path="/oplogin" component={OperatorLogin}></Route>
<Route exact path="/addbus" component={CreateBusService}></Route>
<Route exact path="/busdata" component={Buses}></Route>
<Route exact path="/bookbus" component={BookBus}></Route>
<Route exact path="/logout" component={UserLogout}></Route>
<Route exact path="/availbus" component={AvailableBus}></Route>
<Route exact path="/new" component={NewSelection}></Route>
<Route exact path="/bcon" component={BookingConfirmation}></Route>

<Route exact path="/seat1" component={SeatSelection}></Route>
<Route exact path="/pay" component={Payment}></Route>
<Route exact path="/reg" component={UserRegister}></Route>
<Route exact path="/bookings" component={MyBookings}></Route>

<Route exact path="/" component={Home}></Route>

<Route exact path="/home" component={Home}></Route>







    </div>
   
    </Router>
    
    </Provider>
    
}
export default App

