import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layChiTietPhongVe } from '../../Redux/Actions/FilmAction'


export default function SeatMap(props) {
    const thongTinChiTietPhongVe = useSelector(state => state.TicketBookingReducer.thongTinChiTietPhongVe)
    const dispatch = useDispatch()
    const { malichchieu } = props.match.params
    console.log(thongTinChiTietPhongVe);
    useEffect(() => {
        dispatch(layChiTietPhongVe(malichchieu))
    }, [])
    let renderSeat = () => {
        return thongTinChiTietPhongVe.danhSachGhe?.map((ghe, index) => {
            let chuoiClassSauKhiCheckTinhTrangGhe = () => {
                if(!ghe.daDat && ghe.loaiGhe == 'Vip'){
                    return 'btn text-white seat-btn bg-warning'
                }else if (!ghe.daDat && ghe.loaiGhe !== 'Vip'){
                    return 'btn text-white seat-btn bg-secondary'
                }else{
                    return 'btn text-white seat-btn unavailable-seat'
                }
            }
            if(ghe.daDat){
                return (
                    <div className='seat-div text-center '>
                        <button disabled className={chuoiClassSauKhiCheckTinhTrangGhe()} >{ghe.tenGhe}</button>
                    </div>
                )
            }
            return (
                <div className='seat-div text-center'>
                    <button  className={chuoiClassSauKhiCheckTinhTrangGhe()} >{ghe.tenGhe}</button>
                </div>
            )
            
        })
    }
    
    return (
        <div className="container">
            <div className='bg-dark text-center text-white mb-5' >Màn hình</div>
            {renderSeat()}
        </div>
    )
}
