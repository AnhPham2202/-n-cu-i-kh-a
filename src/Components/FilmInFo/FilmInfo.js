import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmDetailFromApi } from "../../Redux/Actions/FilmAction";
// import background from '../../assets/img'

export default function FilmInfo(props) {
  let filmDetail = useSelector((state) => state.FilmDetailReducer.demo);
  let dispatch = useDispatch();
  let { id } = props.match.params;
  useEffect(() => {
    dispatch(getFilmDetailFromApi(id));
  }, []);

  let releaseDate = filmDetail.ngayKhoiChieu?.split("T")[0];
  let duration =
    filmDetail.heThongRapChieu?.[0].cumRapChieu[0].lichChieuPhim[0].thoiLuong;
  // let duration = e[0].cumRapChieu[0].lichChieuPhim[0].thoiLuong
  return (
    <div id="film-detail">
      <div className="container">
        <div className="row">
          <div
            className="film-bg"
            style={{ backgroundImage: `url(${filmDetail.hinhAnh})` }}
          ></div>
          <div className="bg"></div>

          <div className="col-3">
            <img className="w-100" src={filmDetail.hinhAnh} />
          </div>
          <div className="col-9 film-info">
            <h4 className="title text-white">
              {filmDetail.tenPhim?.toUpperCase()}
            </h4>
            <p className="text-white-50">{filmDetail.moTa}</p>
            <div className="row">
              <div className="col-3 font-weight-bold">
                <p className="text-white">Ngày khởi chiếu</p>
                <p className="text-white">Thời lượng</p>
              </div>
              <div className="col-2">
                <p className="text-white">{releaseDate}</p>
                <p className="text-white">{duration} phút</p>
              </div>
            </div>

            <button className="btn mr-3">Xem Trailer</button>
            <button className="btn mr-3 font-weight-bold">Mua Vé Ngay</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

// <div id="film-detail">
//   <div
//     className="film-info "
//     style={{ backgroundImage: `url(${filmDetail.hinhAnh})` }}
//   ></div>
//   {/* <div className="container film-info-content">
//     <div className="row ">
//       <div className="col-3">123</div>
//       <div className="col-9">123</div>
//     </div>
//   </div> */}
//   <div className="container ">
//     <div className="row ">
//       <div className="col-3">123</div>
//       <div className="col-9">123</div>
//     </div>
//   </div>
// </div>
