const initialState = {
    BusList: [],
    BusList1: [],

    bus: {},
    BookingList:[],
    SeatList:[],
    SeatList1:[],

    UserList:[],
    mybookings:[],
    isloaded:false,bdat:''

}


const busReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BUS":
            console.log(action.type)

            return {
                ...state,
                BusList: [ ...state.BusList,action.payload]
            }
            case "UPDATE_BUS":
            console.log(action.type)

            return {
                ...state,
                BusList: [ ...state.BusList,action.payload]
            }
            case "BOOK_BUS":
            console.log(action.type)

            return {

                // bdat:action.payload
                // //then(res => {
                ...state,
                BookingList: [ ...state.BookingList,action.payload]
            }
            case "ADD_USER":
                console.log(action.type)
    
                return {
                    ...state,
                    UserList: [ ...state.UserList,action.payload]
                }
            case "DELETE_COURSE":
                console.log(action.type)

                return {
                    ...state,
                    courseList: state.courseList.filter(course => course.courseID !== action.payload)
                }
            case "GET_BUS":
                console.log(action.type)
                return {
                    ...state,
                    BusList: [...action.pload]
                }
                case "GET_BUSDATA":
                    console.log(action.type)
                    return {
                        ...state,
                        BusList1: [...action.pload]
                    }
            case "GET_BUSS":
                    console.log(action.type)
                    return {
                        ...state,
                        BookingList:[...action.pload]
                    }
            case "GET_SEATS":
                        return {
                            ...state,
                            SeatList: [...action.pload],isloaded:true
                        }
                        case "GET_SEAT":
                            return {
                                ...state,
                                SeatList1: [...action.pload]
                            }
                            
                        case "VIEW":
                            return {
                                ...state,
                                mybookings: [...action.payload]
                            }
                

        default:
            return state;
    }
}

export default busReducer;