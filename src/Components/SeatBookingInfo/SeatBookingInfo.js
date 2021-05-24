import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layChiTietPhongVe } from '../../Redux/Actions/FilmAction'

export default function SeatBookingInfo(props) {
    const thongTinChiTietPhongVe = useSelector(state => state.TicketBookingReducer.thongTinChiTietPhongVe)
    const mangGheDangDat = useSelector(state => state.TicketBookingReducer.mangGheDangDat)

    const dispatch = useDispatch()
    const { malichchieu } = props.match.params
    console.log(mangGheDangDat);
    useEffect(() => {
        dispatch(layChiTietPhongVe(malichchieu))
    }, [])
    let renderThongTinPhimVaRap = () => {
        let { diaChi, gioChieu, hinhAnh, ngayChieu, tenCumRap, tenPhim, tenRap } = thongTinChiTietPhongVe.thongTinPhim ?? ''
        return (
            <div className="container">
                <h5>{tenPhim}</h5>
                <span>{tenCumRap}</span>
                <p>{tenRap}</p>
            </div>

        )
    }

    let renderGheDangDat = () => {
        return mangGheDangDat.map((gheDangDat, index) => {
            return (
                <tr>
                    <td>{gheDangDat.tenGhe}</td>
                    <td>{gheDangDat.giaVe}</td>
                    <td  style={{padding: '6px 12px'}}> 
                        <button className="btn btn-danger">X</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div>
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
            </table>
        </div>
    )
}
