import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/img/logo.png'
import avatar from './../../assets/img/avatar.png'

export default function Header() {
    return (
        <header>
            <div className="navbar container">
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <ul>
                    <NavLink to="/calender">
                        <li>Lịch chiếu</li>
                    </NavLink>
                    <NavLink to="/theater">
                        <li>Cụm rạp</li>
                    </NavLink>
                    <NavLink to="/news">
                        <li>Tin Tức</li>
                    </NavLink>
                    <NavLink to="/app">
                        <li>Ứng dụng</li>
                    </NavLink>
                </ul>
                <div className="heading__item__right">
                    <a href=" #">
                        <img className="avatar" src={avatar} alt />
                    </a>
                    <a href=" #"><span>Đăng nhập</span></a>
                    <a className="heading-location" href=" #">
                        <i className="fas fa-map-marker-alt" />
                        <span>Hồ Chí Minh</span>
                    </a>
                </div>
            </div>

        </header>
    )
}
