import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { useFormik } from 'formik';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinTaiKhoan } from '../../Redux/Actions/UserActions';

const useList = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
const useButton = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        display: 'block',
        width: '50%',
        background: 'rgba(245, 0, 87, 0.8);',
        transition: 'all 0.25s',
        padding: '0',
        margin: theme.spacing(1),
        '&:hover': {
            background: "rgba(245, 0, 87, 0.75);",
            opacity: '0.8'
        },
    },

}));
const useForm = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50%',
        },
    },
}));

export default function InfoChanging() {
    const list = useList();
    const btn = useButton();
    const form = useForm();
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('t')
    const thongTinTaiKhoan = useSelector(state => state.UserReducer.thongTinTaiKhoan)
    let { taiKhoan, hoTen, email, soDT, matKhau } = thongTinTaiKhoan
    const [state, setState] = useState(1)
    const [emailcanhan, setemailcanhan] = useState(thongTinTaiKhoan.email)
    console.log(thongTinTaiKhoan);
    console.log(thongTinTaiKhoan.email);
    console.log(email);
    console.log(emailcanhan);
    // const formik = useFormik({
    //     initialValues: {
    //         taiKhoan: taiKhoan,
    //         soDT: soDT,
    //         email: email,
    //         hoTen: hoTen
    //     },
    //     onSubmit: values => {
    //         // dispatch({ ...values, matKhau: matKhau, maNhom: 'GP03', maLoaiNguoiDung: 'KhachHang' }, token)
    //         // console.log({...values, matKhau: matKhau, maNhom: 'GP03', maLoaiNguoiDung: 'KhachHang'});
    //         console.log(values.soDT);
    //     },
    // });

    let taiKhoanGuiLenApi = {
        taiKhoan: user.taiKhoan
    }

    useEffect(() => {
        dispatch(layThongTinTaiKhoan(taiKhoanGuiLenApi)) // lấy thông tin từ api để sửa chức năng đăng nhập lưu pass vào local
        setemailcanhan(email)
    }, [email])
    const handleChange = (event) => {
        setState(event.target.value);
      };
    

    const handleEmail =(event) => {
        setemailcanhan(event.target.value)
    }
    return (
        <List className={list.root} style={{ margin: '0px' }}>
            <Typography variant="h4" gutterBottom>
                Thay đổi thông tin tài khoản
            </Typography>
            <Divider />
            <ListItem>
                <form  className={form.root} noValidate autoComplete="off">
                    <TextField
                        id="taiKhoan"
                        label="Tài khoản"
                        value={taiKhoan}
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    <TextField
                        id="standard-name"
                        label="Name"
                        defaultValue={state}
                        value={state == 1 ? null : state}
                        onChange={handleChange}
                    />


                    <TextField
                        id="email"
                        label="Email"
                        defaultValue='Loading...'
                        value={emailcanhan}
                        onChange={handleEmail}
                    />
                    {/* <TextField
                        id="hoTen"
                        label="Tên khách hàng"
                        defaultValue={`${hoTen}` !== undefined ? 'Loading' : `${hoTen}`}
                        value={formik.values.hoTen}
                        onChange={formik.handleChange}
                    /> */}
                    <Button onClick={() => {
                        setState(2)
                        console.log(state);
                    }} type="submit" className={btn.root} variant="contained" color="secondary">
                        Thay đổi
                    </Button>
                </form>
            </ListItem>
        </List>
    )
}
