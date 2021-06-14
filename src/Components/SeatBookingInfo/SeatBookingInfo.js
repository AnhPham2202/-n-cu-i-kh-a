import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layChiTietPhongVe, xoaGhe } from '../../Redux/Actions/TicketBookingActions'
import { datVe } from '../../Redux/Actions/UserActions'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useText = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
        textAlign: 'center',
        color: 'green',
        padding: 20,
        borderBottom: '1px solid #e9e9e9'
    },
    lineFormat: {
        borderBottom: '1px solid #e9e9e9',
        padding: '15px 0'
    }
});

export default function SeatBookingInfo(props) {
    const dispatch = useDispatch()
    const text = useText()
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
        dispatch({
            type: 'RESET_MANG_GHE'
        })
    }, [])

    let renderThongTinPhimVaRap = () => {
        let { diaChi, gioChieu, hinhAnh, ngayChieu, tenCumRap, tenPhim, tenRap } = thongTinChiTietPhongVe.thongTinPhim ?? ''
        return (
            <div className={text.lineFormat}>
                <Typography variant="h6">
                    {tenPhim}
                </Typography>
                <Typography variant="body2">
                    {diaChi}
                </Typography>
                <Typography variant="body2">
                    {`${ngayChieu} - ${gioChieu} - ${tenRap}`}
                </Typography>
            </div>

        )
    }

    let renderGheDangDat = () => {
        return mangGheDangDat.map((gheDangChon, index) => {
            thongTinDatVe.danhSachVe.push({
                maGhe: gheDangChon.maGhe,
                giaVe: gheDangChon.giaVe,
            })
            if (gheDangChon.loaiGhe === 'Thuong') {
                return (
                    `${gheDangChon.tenGhe}, `

                )
            }
        })
    }
    let renderGheDangDatVIP = () => {
        return mangGheDangDat.map((gheDangChon, index) => {
            if (gheDangChon.loaiGhe === 'Vip') {
                return (
                    `${gheDangChon.tenGhe}, `
                )
            }
        })
    }
    let renderTongTien = () => {
        let tongTien = 0
        mangGheDangDat.map((gheDangChon, index) => {
            tongTien += gheDangChon.giaVe

        })
        return (
            <Typography variant="h4">
                {tongTien + " đ"}
            </Typography>
        )

    }
    return (
        <Fragment>
            <div className={text.root}>
                {renderTongTien()}
            </div>
            {renderThongTinPhimVaRap()}
            <div className={text.lineFormat}>
                <Typography variant="caption" display="block" gutterBottom>
                    Ghế thường: {renderGheDangDat()}
                </Typography>
            </div>
            <div className={text.lineFormat}>
                <Typography variant="caption" display="block" gutterBottom>
                    Ghế VIP: {renderGheDangDatVIP()}
                </Typography>
            </div>


            <button onClick={() => {
                dispatch(datVe(thongTinDatVe, user.accessToken))
            }} className="btn buy-ticket-btn">Mua Vé</button>
        </Fragment>
    )
}
