import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router'
import TicketInfoTable from '../../Components/TicketInfoTable/TicketInfoTable';
import UserBar from '../../Components/UserBar/UserBar'

export default function UserPage(props) {
    console.log(props);
    const component = useSelector(state => state.UserReducer.component)

    return (
        <div className="row">
            <div className="col-3">
                <UserBar />
            </div>

            <div className="col-9">
                {component}
            </div>
        </div>
    )
}
