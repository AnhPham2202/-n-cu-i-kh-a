import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFilmFromApi } from '../../Redux/Actions/FilmAction'
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';


export default function FilmList(propsRoute) {
    const dispatch = useDispatch()
    let filmArr = useSelector((state) => state.PhimListReducer.filmArr)

    useEffect(async () => {
        dispatch(getFilmFromApi('GP02'))
    }, [])
    filmArr.reverse().splice(0,4)
    const renderFilm = (i) => {
        return (
            filmArr.slice(i, i + 8).map((film, index) => {
                return (
                    <div key={index} class="film-list-item">
                        <div class="poster" style={{ backgroundImage: `url('${film.hinhAnh}')` }}>
                            <div class="overlay">
                                <a data-lity href={film.trailer}><i class="fas fa-play"></i></a>
                            </div>
                        </div>
                        <div class="film-info">
                            <div className="film-name">
                                <span class="age-limit mr-2">C18</span>
                                <span>{film.tenPhim} (C18)</span>
                            </div>
                            <p>120 phút</p>
                            <NavLink to={`/filmdetail/${film.maPhim}`}>
                            <button class="btn btn-danger">MUA VÉ</button>
                            </NavLink>
                            
                        </div>
                    </div>
                )
            })
        )

    }


    const renderCarousel = () => {
        let num = Math.floor(filmArr.length / 8);
        if(filmArr.length % 8 !== 0){
            num +=1
        }


        let filmCarouselArr = []
        for (let i = 0; i < num; i++) {
                filmCarouselArr.push(
                    <div class="list-line-1">
                        {renderFilm(i + 7 * i)}
                    </div>
                )
        }
        return (
            <Slider>
                {filmCarouselArr}
            </Slider>
        )
    }



    return (
        <section id="film-list" class="container">
            <div class="filter container">
                <div class="row">
                    <div class="filter-format col-md-3">
                        <div class="row">
                            <div class="col-md-10">
                                <a href="#">Phim</a>
                            </div>
                            <div class="col-md-2">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div class="filter-format col-md-2">
                        <div class="row">
                            <div class="col-md-10">
                                <a href="#">Rạp</a>
                            </div>
                            <div class="col-md-2">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div class="filter-format col-md-2">
                        <div class="row">
                            <div class="col-md-10">
                                <a href="#">Ngày xem</a>
                            </div>
                            <div class="col-md-2">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div class="filter-format col-md-2">
                        <div class="row">
                            <div class="col-md-10">
                                <a href="#">Suất chiếu</a>
                            </div>
                            <div class="col-md-2">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div class="filter-format col-md-3">
                        <button class="btn btn-success">Mua vé ngay</button>
                    </div>
                </div>
            </div>


            {/*  Nav pills  */}
            <ul id="film-nav" class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="pill" href="#premiere">Đang chiếu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#coming">Sắp chiếu</a>
                </li>

            </ul>

            {/*  Tab panes  */}
            <div class="tab-content">
                <div id="premiere" class="slick-carousel-noDots film-list-showing tab-pane  active">
                    <div class="container" id="">
                        {renderCarousel()}
                    </div>
                </div>



                <div id="coming" class="tab-pane container fade" >
                    <div class="container" id="">
                        {renderCarousel()}
                    </div>
                </div>
            </div>
        </section>
    )
}
