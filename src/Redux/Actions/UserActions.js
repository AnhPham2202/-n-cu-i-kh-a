import axios from 'axios'
import { history } from '../../App';

export const dangKy = (user) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                method: 'POST',
                data: user
            })
            if (result.data) {
                history.push('/dangnhap')
            }
        } catch (error) {
            console.log(error.response?.data);
            alert(error.response?.data)
        }
    }
}

export const dangNhap = (userLogin) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data: userLogin
            })
            dispatch({
                type: 'DANG_NHAP',
                tenDangNhap: result.data.taiKhoan
            })
            localStorage.setItem('user', JSON.stringify(result.data))
            localStorage.setItem('t', result.data.accessToken)

            alert('Đăng nhập thành công')
            history.push('/')
        } catch (err) {
            console.log(err.response?.data)
            alert(err.response?.data)
        }
    }
}
export const dangXuat = () => {
    return (dispatch) => {
        dispatch({
            type: 'DANG_XUAT',
            tenDangNhap: ''
        })
        localStorage.removeItem('user')
        localStorage.removeItem('t')
    }
}

export const datVe = (info, token) => {
    return async (dispatch) => {
        try {
            const result = await axios({

                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                method: 'POST',
                data: info,
                headers: {'Authorization': 'Bearer ' + token }
            })
            dispatch({
                type: 'DAT_VE',
            })
        } catch (error) {
            console.log(error);
        }
        
    }
}