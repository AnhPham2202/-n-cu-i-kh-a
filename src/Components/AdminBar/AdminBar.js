import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TicketInfoTable from '../TicketInfoTable/TicketInfoTable';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from '../UserInfo/UserInfo';
import { doiGiaoDien } from '../../Redux/Actions/UserActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { withStyles } from '@material-ui/core/styles';




const useList = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }, 
}));

const useText = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
        textAlign: 'center',
        margin: '0'
    },
    body1: {
        fontSize: 14,
        textAlign: 'left',
    }
});


const useAvatar = makeStyles((theme) => ({
    root: {
        display: 'block',
        '& > *': {
            // margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        margin: '20px auto'
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function AdminBar() {
    const dispatch = useDispatch()
    const list = useList();
    const avatar = useAvatar();
    const text = useText();
    const [selectedIndex, setSelectedIndex] = useState(1);
    let taiKhoan = JSON.parse(localStorage.getItem('user')).taiKhoan

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={list.root}>
            <List component="nav" aria-label="main mailbox folders">
                <div className={avatar.root}>
                    <Avatar alt={taiKhoan.toUpperCase()} src="/static/images/avatar/1.jpg" className={avatar.large} />
                    <div className={text.root}>
                        <Typography variant="caption" display="block" gutterBottom>
                            <i>Xin chào,</i>
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            {taiKhoan}
                        </Typography>
                    </div>
                </div>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem  onClick={(e) => {
                    handleListItemClick(e, 1)
                    dispatch(doiGiaoDien(<UserInfo />))
                }} button selected={selectedIndex === 1}
                >
                    <ListItemIcon>
                        <MovieCreationIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quản lý phim" />
                </ListItem>
                <ListItem onClick={(e) => {
                    handleListItemClick(e, 2)
                    dispatch(doiGiaoDien(<TicketInfoTable />))
                }} button selected={selectedIndex === 2}
                >
                    <ListItemIcon>
                        <SupervisedUserCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quản lý người dùng" />
                </ListItem>

                <ListItem onClick={(e) => {
                    handleListItemClick(e, 3)
                    dispatch(doiGiaoDien(<TicketInfoTable />))
                }} button selected={selectedIndex === 3}
                >
                    <ListItemIcon>
                        <PlaylistAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Thêm phim" />
                </ListItem>

                <ListItem onClick={(e) => {
                    handleListItemClick(e, 4)
                    dispatch(doiGiaoDien(<TicketInfoTable />))
                }} button selected={selectedIndex === 4}
                >
                    <ListItemIcon>
                        <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Thêm người dùng" />
                </ListItem>
            </List>
        </div>
    )
}
