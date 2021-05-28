import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layChiTietPhongVe } from '../../Redux/Actions/FilmAction'
import { xoaGhe } from '../../Redux/Actions/TicketBookingActions'
import { datVe } from '../../Redux/Actions/UserActions'

export default function SeatBookingInfo(props) {
    const dispatch = useDispatch()
    const thongTinChiTietPhongVe = useSelector(state => state.TicketBookingReducer.thongTinChiTietPhongVe)
    const mangGheDangDat = useSelector(state => state.TicketBookingReducer.mangGheDangDat)
    const { malichchieu } = props.match.params
    let user = JSON.parse(localStorage.getItem('user'))
    let thongTinDatVe = {
        maLichChieu: malichchieu,
        danhSachVe: [],
        taiKhoanNguoiDung: user.taiKhoan
    }

    useEffect(() => {
        dispatch(layChiTietPhongVe(malichchieu))
    }, [])

    let renderThongTinPhimVaRap = () => {
        let { diaChi, gioChieu, hinhAnh, ngayChieu, tenCumRap, tenPhim, tenRap } = thongTinChiTietPhongVe.thongTinPhim ?? ''
        return (
            <div className="container">
                <h5 className="mt-4">{tenPhim}</h5>
                <p>{tenCumRap}</p>
                <i>{tenRap}</i>
            </div>

        )
    }

    let renderGheDangDat = () => {
        return mangGheDangDat.map((gheDangChon, index) => {
            thongTinDatVe.danhSachVe.push({
                maGhe: gheDangChon.maGhe,
                giaVe: gheDangChon.giaVe,
              })
            return (
                <tr key={index}>
                    <td>{gheDangChon.tenGhe}</td>
                    <td>{gheDangChon.giaVe} đ</td>
                    <td style={{ padding: '6px 12px' }}>
                        <button onClick={() => { dispatch(xoaGhe(gheDangChon)) }} className="btn btn-danger">X</button>
                    </td>
                </tr>
            )
        })
    }
    let renderTongTien = () => {
        let tongTien = 0
        mangGheDangDat.map((gheDangChon, index) => {
            tongTien += gheDangChon.giaVe
            return tongTien
        })
        return tongTien
    }
    return (
        <Fragment>
            {renderThongTinPhimVaRap()}
            <table className="table">
                <thead>
                    <tr>
                        <th>Ghế</th>
                        <th>Giá</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderGheDangDat()}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Thành tiền</td>
                        <td>{renderTongTien()} đ</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
            <button onClick={() => {
                dispatch(datVe(thongTinDatVe, user.accessToken))}} className="btn buy-ticket-btn">Mua Vé</button>
        </Fragment>
    )
}
