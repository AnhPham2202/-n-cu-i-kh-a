import { axios } from "axios";

export const getFilmFromApi = (maNhom) =>  { 
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
                method: 'GET'
            })    
            dispatch({
                type: 'SET_MANG_PHIM',
                filmArr: result.data
            });
    
        } catch (error) {
            console.log(error);
        }
    }

}