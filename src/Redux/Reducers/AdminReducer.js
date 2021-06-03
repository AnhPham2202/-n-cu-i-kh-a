import FilmManagement from "../../Components/FilmManagement/FilmManagement"

const initialState = {
    phimPhanTrang: {},
    component: <FilmManagement />,

}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'SET_PHIM_PHAN_TRANG': {
        state.phimPhanTrang = action.phimPhanTrang
        return { ...state }
    }
    case 'DOI_GIAO_DIEN_ADMIN': {
        state.component = action.component
    }

    default:
        return state
    }
}
