import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFilmFromApi } from '../../Redux/Actions/FilmAction'


export default function FilmList() {
    const dispatch = useDispatch()
    const filmArr = useSelector(state => state.PhimListReducer.filmArr)
    useEffect(() => {

        dispatch(getFilmFromApi('GP2'))
    }, [])

    console.log(filmArr);
    return (
        <div>
            
        </div>
    )
}
