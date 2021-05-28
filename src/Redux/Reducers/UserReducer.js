let tenDN = '';
if(localStorage.getItem('user')){
    let userLogin = JSON.parse(localStorage.getItem('user'));
    tenDN = userLogin.taiKhoan
}

const stateDefault = {
    tenDangNhap: tenDN
}

export default  (state=stateDefault, action) =>{
    switch (action.type) {
        case 'DANG_NHAP': {
            state.tenDangNhap = action.tenDangNhap
            return {...state}
        }
        case 'DANG_XUAT': {
            state.tenDangNhap = action.tenDangNhap
            return {...state}
        }
        
    }
    return state;
}