import React, { useState } from 'react'
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { doiMatKhau } from '../../Redux/Actions/UserActions';



const useForm = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50%',
        },
    },
}));

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
        '&:hover': {
            background: "rgba(245, 0, 87, 0.75);",
            opacity: '0.8'
        },
    },

}));

const useList = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function PasswordChanging() {
    const form = useForm();
    const list = useList();
    const btn = useButton();

    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))

    const [thongTinMatKhau, setThongTinMatKhau] = useState({
        matKhau: '',
        matKhauMoi: '',
        matKhauNhapLai: ''
    })

    const handleChange = (e) => {
        let { id, value } = e.target
        thongTinMatKhau[id] = value
        console.log(thongTinMatKhau);

    }
    return (
        <List className={list.root} style={{ margin: '0px' }}>
            <Typography variant="h4" gutterBottom>
                Đổi mật khẩu
            </Typography>
            <Divider />
            <ListItem>
                <form className={form.root} noValidate autoComplete="off">
                    <TextField
                        id="matKhau"
                        label="Nhập mật khẩu"
                        type="password"
                        autoComplete="current-password"
                        helperText="Incorrect entry."
                        error
                        onChange={handleChange}

                    />

                    <TextField
                        id="matKhauMoi"
                        label="Nhập mật khẩu mới"
                        type="password"
                        onChange={handleChange}
                        autoComplete="current-password"
                    />

                    <TextField
                        id="matKhauNhapLai"
                        label="Nhập lại mật khẩu mới"
                        type="password"
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            doiMatKhau(user.taiKhoan, thongTinMatKhau.matKhau, thongTinMatKhau.matKhauMoi)}}

                        type="submit" className={btn.root} variant="contained" color="secondary">
                        Thay đổi
                    </Button>
                </form>
            </ListItem>
        </List>
    )
}
