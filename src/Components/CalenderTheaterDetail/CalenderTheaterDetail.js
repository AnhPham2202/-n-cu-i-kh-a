import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getTheaterFilmWithParamsFromApi } from '../../Redux/Actions/FilmAction';



export default function CalenderTheaterDetail(props) {
    const { mahethongrap } = props.match.params
    const dispatch = useDispatch();
    const thongTinHeThongRap = useSelector(state => state.TheaterListReducer.paritcularTheaterFilmArr)
    const thongTinRap = useSelector(state => state.TheaterListReducer.theaterInfo)

    const [rapIndex, setRapIndex] = useState(thongTinRap.firstRender)
    const [mangLichChieu, setMangLichChieu] = useState([])
    let mangLichChieuKhongTrung = []

    useEffect(() => {
        dispatch(getTheaterFilmWithParamsFromApi(mahethongrap));
    }, []);

    let xuLyMangLichChieu = (date) => {
        mangLichChieu.map((lichChieu, index) => {
            lichChieu = lichChieu.ngayChieuGioChieu?.split('T')[0]
            
            mangLichChieuKhongTrung.push(lichChieu);
            mangLichChieuKhongTrung.reverse();
            for (let i = 1; i < mangLichChieuKhongTrung.length; i++) {
                if (mangLichChieuKhongTrung[i] === lichChieu) {
                    mangLichChieuKhongTrung.splice(0, 1);
                }
            }
        });
    }
    xuLyMangLichChieu()

    let renderDate = () => {
        return mangLichChieuKhongTrung.map((lichChieu, index) => {
            lichChieu = 'Ngày ' + lichChieu.split('-')[2] + '-' + lichChieu.split('-')[1] + '-' + lichChieu.split('-')[0]
            return (
                <div className="date ">
                    <a className="font-weight-bold">{lichChieu}</a>
                </div>
            )

        })
    }

    let renderTheater = () => {
        return thongTinHeThongRap[0]?.lstCumRap.map((theater, index) => {
            return (
                <li
                    onClick={() => {
                        dispatch({
                            type: 'SET_THEATER_INFO',
                            theaterInfo: {
                                name: theater.tenCumRap,
                                address: theater.diaChi,
                                firstRender: index
                            }
                        })
                    }}
                    style={{ cursor: "pointer" }}
                    key={index}
                    className="left-col nav-item w-100 "
                >
                    <a onClick={() => setRapIndex(index)}
                        className="nav-link text-center active"
                        data-toggle="tab"
                    >
                        <div className="logo-name">
                            {theater.tenCumRap.toUpperCase()}
                        </div>
                    </a>
                </li>
            );
        })
    }
    let renderFilm = () => {
        return thongTinHeThongRap[0]?.lstCumRap[rapIndex]?.danhSachPhim.map(
            (film, index) => {
                return (
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-2 w-100">
                                <img className='w-100' src={film.hinhAnh} />
                            </div>
                            <div className="col-md-10 theater-text">
                                <span className="theater-name">{film.tenPhim} </span>
                                <button onClick={() => setMangLichChieu(film.lstLichChieuTheoPhim)}
                                    className="btn default-btn">Xem Chi Tiết Lịch</button>
                            </div>
                        </div>
                    </div>
                );
            }
        );
    };
    return (
        <section id="calender-film-detail">
            <div className="total-table container ">
                <div className="row table-height">
                    <div className="col-md-4 logo">
                        <ul className="nav nav-tabs">{renderTheater()}</ul>
                    </div>
                    <div className="col-md-8">
                        <div className="row schedule-scroll-bar">{renderDate()}</div>
                        <div className="tab-content">
                            <div className="tab-pane container active ">
                                {renderFilm()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

