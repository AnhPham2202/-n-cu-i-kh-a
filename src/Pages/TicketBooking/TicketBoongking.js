import React from 'react'
import { useSelector } from 'react-redux'
import SeatBookingInfo from '../../Components/SeatBookingInfo/SeatBookingInfo'
import SeatMap from '../../Components/SeatMap/SeatMap'
import TicketBookingResult from '../../Components/TicketBookingResult/TicketBookingResult'


export default function TicketBoongking(props) {
    const stepper = useSelector(state => state.TicketBookingReducer.stepper)
    return (
        <div id="ticket-booking">
            <div className="row ">
                <div className="col-9">
                    
                    {stepper == 0 ? <SeatMap {...props} /> : <TicketBookingResult {...props} />}
                    {/* <SeatMap {...props} /> */}
                </div>
                <div style={{ position: 'relative' }} className="col-3 seat-booking-info">
                    <SeatBookingInfo {...props} />
                </div>
            </div>
        </div>
    )
}
