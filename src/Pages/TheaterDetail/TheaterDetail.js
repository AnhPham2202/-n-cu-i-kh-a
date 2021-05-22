import React, { useState } from 'react'
import { Fragment } from 'react'
import CalenderTheaterDetail from '../../Components/CalenderTheaterDetail/CalenderTheaterDetail'
import TheaterInfo from '../../Components/TheaterInfo/TheaterInfo'

export default function TheaterDetail(props) {
        return (
        <Fragment>
            <TheaterInfo   {...props}/>
            <CalenderTheaterDetail  {...props}/>
        </Fragment>
    )
}
