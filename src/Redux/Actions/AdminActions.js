import axios from 'axios'

export const layPhimPhanTrang = (trangHienTai, soPhanTu) => {
    return async (dispatch) => {
        const result = await axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${trangHienTai}&soPhanTuTrenTrang=${soPhanTu}`,
            method: 'GET'
        })
        dispatch({
            type: 'SET_PHIM_PHAN_TRANG',
            phimPhanTrang: result.data
        })
    }
}