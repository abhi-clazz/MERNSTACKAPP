import axios from 'axios'
export const addbus= Bus => async dispatch => {
   await axios.post('http://localhost:4000/busticketing/buses', Bus)
    dispatch ({
        type: "ADD_BUS",
        payload: Bus
    });
};
export const bookBus= Booking => async dispatch => {
    await axios.post('http://localhost:4000/busticketing/booking', Booking).then(res => {
     dispatch ({
         type: "BOOK_BUS",
         payload: res.data
     });
    })
 };
 export const register= user => async dispatch => {
    await axios.post('http://localhost:4000/registration/reguser', user)
     dispatch ({
         type: "ADD_USER",
         payload: user
     });
 };

export const getBuses = (bdata) =>
    async (dispatch) => {

        try {
            await axios.get('http://localhost:4000/busticketing/seats',{params:bdata})
                .then(res => {
                    dispatch(
                        {
                            type: "GET_BUS",
                            pload: res.data
                        }
                    )
                })

        } catch (error) {
            console.log(error);
        }


   


    };
    export const getBus = (bdata) =>
    async (dispatch) => {

        try {
            await axios.get(`http://localhost:4000/bus/busseats/${bdata.source}/${bdata.destination}/${bdata.journeyDate}`)
                .then(res => {
                    dispatch(
                        {
                            type: "GET_BUSDATA",
                            pload: res.data
                        }
                    )
                })

        } catch (error) {
            console.log(error);
        }


   


    };
    export const getRoutes = () =>
    async (dispatch) => {
        console.log("bug")

        try {
            console.log("bug32")
            await axios.get('http://localhost:4000/busticketing/routes')
                .then(res => {
                    console.log("bug4")
                    dispatch(
                        {
                            type: "GET_BUSS",
                            pload: res.data
                        }
                    )
                    console.log("bug3")
                })

        } catch (error) {
            console.log(error);
        }
    }
    export const getSeats = (bdataa) =>
    async (dispatch) => {

        try {
            await axios.get(`http://localhost:4000/busticketing/aseats/${bdataa}`)
                .then(res => {
                        

                    dispatch(
                        {
                            type: "GET_SEATS",
                            pload: res.data
                        }
                    )
                })

        } catch (error) {
            console.log(error);
        }
    }
    export const getSeat = (bdataa) =>
    async (dispatch) => {

        try {
            await axios.post('http://localhost:4000/bus/seats',bdataa)
                .then(res => {
                        

                    dispatch(
                        {
                            type: "GET_SEAT",
                            pload: res.data
                        }
                    )
                })

        } catch (error) {
            console.log(error);
        }
    }
    export const updateSeats = bid =>
    async (dispatch) => {

        try {
            await axios.post('http://localhost:4000/busticketing/seats1',bid).then(res => {
    
                dispatch(
                    {
                        type: "UPDATE_SEATS",
                        payload: res.data
    
                    }
                )
            })
        } catch (error) { console.log(error) }
    }
    
    export const viewbookings = (userdata) => async (dispatch) => {
        try {
            await axios.get(`http://localhost:4000/busticketing/bookings/${userdata.id}`).then(res => {
    
                dispatch(
                    {
                        type: "VIEW",
                        payload: res.data
    
                    }
                )
            })
        } catch (error) { console.log(error) }
    }