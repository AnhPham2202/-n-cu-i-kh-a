import React from 'react'
import SeatBookingInfo from '../../Components/SeatBookingInfo/SeatBookingInfo'
import SeatMap from '../../Components/SeatMap/SeatMap'


export default function TicketBoongking(props) {

    return (
        <div id="ticket-booking">
            <div className="row ">
                <div className="col-9">
                    <SeatMap {...props} />
                </div>
                <div className="col-3 seat-booking-info">
                    <SeatBookingInfo {...props} />
                </div>
            </div>
        </div>
    )
}
