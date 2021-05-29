import React, { useState } from 'react'
import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TicketInfoTable from '../TicketInfoTable/TicketInfoTable';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function UserBar() {
    let { taiKhoan, matKhau, email, soDT, hoTen } = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState(true)
    const classes = useStyles();


    // const component = useSelector(state => state.UserReducer.component)


    // let renderUser = () => {
    //     return (
    //         <Fragment>
    //             <form className="form-group">
    //                 <label htmlFor />Họ và Tên
    //             <input disabled={disabled} type="text" className="form-control" id value={hoTen} />
    //                 <label htmlFor />Tên tài khoản
    //             <input disabled={disabled} type="text" className="form-control" id value={taiKhoan} />
    //                 <label htmlFor />Email cá nhân
    //             <input disabled={disabled} type="text" className="form-control" id value={email} />
    //                 <label htmlFor />Số điện thoại
    //             <input disabled={disabled} type="text" className="form-control" id value={soDT} />
    //             </form>

    //             {/* <form className={classes.root} noValidate autoComplete="off">
    //             <TextField disabled={disabled} id="outlined-basic" label="Outlined" variant="outlined" />
    //             <TextField disabled={disabled} id="outlined-basic" label="Outlined" variant="outlined" />
    //             <TextField disabled={disabled} id="outlined-basic" label="Outlined" variant="outlined" />
    //             <TextField disabled={disabled} id="outlined-basic" label="Outlined" variant="outlined" />
    //             <TextField disabled={disabled} id="outlined-basic" label="Outlined" variant="outlined" />
    //             </form> */}

    //             <button onClick={() => setDisabled(!disabled)} className="btn btn-primary">{disabled == true ? "Sửa thông tin" : "Cập nhật thông tin"}</button>
    //         </Fragment>
    //     )
    // }
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Thông tin tài khoản" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText onClick={() => {
                        dispatch({
                            type: 'DOI_GIAO_DIEN',
                            component: <TicketInfoTable />
                        })
                    }} primary="Vé đã đặt" />
                </ListItem>
            </List>
        </div>
    )
}
