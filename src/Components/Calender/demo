import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getLogoFromApi,
  getTheaterFilmFromApi,
} from "../../Redux/Actions/FilmAction";

export default function Calender() {
  let logoArr = useSelector((state) => state.TheaterListReducer.logoArr);
  let theaterArr = useSelector((state) => state.TheaterListReducer.theaterArr);
  let theaterFilmArr = useSelector(
    (state) => state.TheaterListReducer.theaterFilmArr
  );
  const theaterInfo = useSelector(state => state.TheaterListReducer.theaterInfo)

  // let [theater, setTheater] = useState("CineStar");
  let [filmIndex, setfilmIndex] = useState(0);
  let [brandIndex, setBrandIndex] = useState(0);
  const dispatch = useDispatch();

  //useEffect đã bỏ vô nhưng chưa biết để làm gì 
  // useEffect(() => {
  //   dispatch(getTheaterFromApi(theater));
  // }, [theater]);


  useEffect(() => {
    // dispatch(getLogoFromApi())
    dispatch(getTheaterFilmFromApi());
  }, []);

  let render = () => {
    return (
      <div className="total-table container ">
        <div className="row table-height">
          <div className="col-md-1">{renderLogo()}</div>
          <div className="col-md-5">
           <div className="tab-content">
              <div className="tab-pane container active ">
                {renderTheater()}
              </div>
            </div>
          </div>
          <div className="col-md-6">{renderFilm()}</div>
        </div>
      </div>
    );
  };

  let renderLogo = () => {
    let logo = [];
    theaterFilmArr.map((theaterInfo, index) => {
      logo.push(
        <li key={index} className="left-col nav-item ">
          <a
            onClick={() => {
              // setTheater(theaterInfo.maHeThongRap);
              setBrandIndex(index)
            }}
            className="nav-link "
            data-toggle="tab"
            href={`#calender${index + 1}`}
          >
            <img src={theaterInfo.logo} />
          </a>
        </li>
      );
    });
    return (
        <ul className="nav nav-tabs">{logo}</ul>
    );
  };
  let renderFilm = () => {
    return theaterFilmArr[brandIndex]?.lstCumRap[filmIndex]?.danhSachPhim.map(
      (item, index) => {
        return (
          <div className="container">
            <a href="#" className="row">
              <div className="col-md-3">
                <img src={item.hinhAnh} />
              </div>
              <div className="col-md-9 theater-text">
                <span className="theater-name">{item.tenPhim} </span>
                <p className="theater-detail">[Chọn phim để xem chi tiết] </p>
                <NavLink to={`/filmdetail/${item.maPhim}`}>
                  <button className="btn default-btn">Xem Chi Tiết</button>
                </NavLink>
              </div>
            </a>
          </div>
        );
      }
    );
  };
  let renderTheater = () => {
      return theaterFilmArr[brandIndex]?.lstCumRap.map((cumRap, i) =>{
        // let theaterInfo = [];
        return (
          <a
            onClick={() => {
              setfilmIndex(i);
            }}
            key={i}
            style={{ cursor: "pointer" }}
            className="row"
          >
            <div className="col-md-3">
              <img src="./img/address-1.png" />
            </div>
            <div className="col-md-9 theater-text">
              <span className="theater-name">{cumRap.tenCumRap}</span>
              <span className="theater-area">Bitexco</span>
              <p className="theater-address">{cumRap.diaChi}</p>
              <NavLink 
              
              onClick={() =>{
                dispatch({
                  type: 'SET_THEATER_INFO',
                  theaterInfo: {
                    name: 'name',
                    address: 'address',
                    firstRender: i
                  }
                })
              }}
              
              to={`/theaterdetail/${theaterFilmArr[brandIndex].maHeThongRap}`}  className="theater-detail">[Chi Tiết]</NavLink>
            </div>
          </a>
        );
      })
  };

  return <section id="calender">{render()}</section>;
}
