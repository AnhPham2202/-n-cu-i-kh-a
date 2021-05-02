const initialState = {
    filmArr: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MANG_PHIM': {
            state.filmArr = action.filmArr
            return {...state}
        }
    }
    return state;
}
