import React, { useState } from 'react'
import { Fragment } from 'react'

export default function UserPage() {
    let { taiKhoan, matKhau, email, soDT, hoTen } = JSON.parse(localStorage.getItem('user'))
    const [disabled, setDisabled] = useState(true)
    let renderUser = () => {
        return (
            <Fragment>
                <form className="form-group">
                    <label htmlFor />Họ và Tên
                <input disabled={disabled} type="text" className="form-control" id value={hoTen} />
                    <label htmlFor />Tên tài khoản
                <input disabled={disabled}type="text" className="form-control" id value={taiKhoan} />
                    <label htmlFor />Email cá nhân
                <input disabled={disabled}type="text" className="form-control" id value={email} />
                    <label htmlFor />Số điện thoại
                <input disabled={disabled}type="text" className="form-control" id value={soDT} />
                </form>
                <button onClick={() => setDisabled(!disabled)} className="btn btn-primary">{disabled == true ? "Sửa thông tin" : "Cập nhật thông tin"}</button>
            </Fragment>
        )
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">{renderUser()}</div>
                <div className="col-8">123</div>
            </div>
        </div>
    )
}
