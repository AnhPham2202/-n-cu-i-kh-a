const initialState = {
    thongTinChiTietPhongVe: {},
    mangGheDangDat: [
        {
            daDat: false,
            giaVe: 75000,
            loaiGhe: "Thuong",
            maGhe: 52201,
            maRap: 481,
            stt: "01",
            taiKhoanNguoiDat: null,
            tenGhe: "01"
        },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MANG_GHE': {
            state.thongTinChiTietPhongVe = action.thongTinPhongVe
            return { ...state }
        }

    }
    return state

}
