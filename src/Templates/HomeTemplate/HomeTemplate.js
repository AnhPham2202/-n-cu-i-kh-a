import React, { Fragment } from 'react'
import { Router, Route } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
export default function HomeTemplate(props) {
    return (
            <Route path={props.path} render={(propsRoute) => {
                console.log(props.component);
                return (
                    <Fragment>
                        <Header />
                        <props.component {...propsRoute}/>
                        <Footer />
                    </Fragment>
                )
            }} />
    )
}
