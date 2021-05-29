import React from 'react'
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
            width: '40ch',
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

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
export default function PasswordChanging() {
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
                    <TextField
                        id="password"
                        label="Nhập mật khẩu"
                        type="password"
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        helperText="Incorrect entry."
                        error

                    />

                    <TextField
                        id="new-password"
                        label="Nhập mật khẩu mới"
                        type="password"
                        autoComplete="current-password"
                    />

                    <TextField
                        id="repeated-password"
                        label="Nhập lại mật khẩu mới"
                        type="password"
                        autoComplete="current-password"
                    />
                    <Button type="submit" className={btn.root} variant="contained" color="secondary">
                        Thay đổi
                    </Button>
                </form>
            </ListItem>
        </List>
    )
}
