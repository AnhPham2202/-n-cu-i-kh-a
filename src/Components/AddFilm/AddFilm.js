import React from 'react';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useForm = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50%',
        }
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

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
export default function AddFilm() {
    const form = useForm();
    const list = useList();
    const btn = useButton();




    const formik = useFormik({
        initialValues: {
            password: '',
        },
        onSubmit: values => {
            console.log(values.password);
        },
    });


    return (
        <List className={list.root} style={{ margin: '0px' }}>
            <Typography variant="h4" gutterBottom>
                Đổi mật khẩu
            </Typography>
            <Divider />
            <ListItem>
                <form onSubmit={formik.handleSubmit} className={form.root} noValidate autoComplete="off">
                    <TextField id="tenPhimMoi" label="Tên phim" variant="outlined" />
                    <TextField id="biDanhPhimMoi" label="Bí danh" variant="outlined" />
                    <TextField id="fileAnh" label="No file chosen" variant="outlined" />
                    <TextField id="moTaPhimMoi" label="Mô tả" variant="outlined" />
                    <TextField id="trailerPhimMoi" label="Link trailer" variant="outlined" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                    <Button type="submit" className={btn.root} variant="contained" color="secondary">
                        Thay đổi
                    </Button>
                </form>
            </ListItem>
        </List>
    );
}
