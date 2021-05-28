
export const themGhe = (gheDangChon) => {
    return (dispatch) => {
        dispatch({
            type: 'THEM_GHE',
            gheDangChon: gheDangChon
        })

    }
}


export const xoaGhe = (gheDangChon) => {
    return (dispatch) => {
        dispatch({
            type: 'XOA_GHE',
            gheDangChon: gheDangChon
        })

    }
}