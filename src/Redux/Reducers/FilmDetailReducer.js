const initialState = {
    demo: {}

}

export default (state = initialState, action) => {
    switch (action.type){
        case 'SET_FILM_DETAIL_INFO': {
            state.demo = action.demo
            return {...state}
        }
    }
    return state
}