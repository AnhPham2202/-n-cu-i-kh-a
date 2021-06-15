import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/img/logo.png'
import avatar from './../../assets/img/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { dangXuat } from '../../Redux/Actions/UserActions'
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import SeatMap from '../../Components/SeatMap/SeatMap'

const useStepper = makeStyles((theme) => ({
    root: {
        width: '50%',
        padding: 0
    },
    button: {
        marginRight: theme.spacing(0),
    },
    instructions: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
    },
}));

function getSteps() {
    return ['Chọn ghế & thanh toán', 'Kết quả đặt vé' ];
}


const useList = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        '& .MuiTypography-body1': {
            fontSize: '13px !important',
            fontWeight: 'bold'
        },
        '& .MuiListItem-gutters': {
            padding: '4px 0',
            textAlign: 'center',
        },
        '& .MuiList-padding': {
            padding: 0
        }
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const useDropDown = makeStyles((theme) => ({
    root: {
        position: 'relative',
        '& .MuiButton-root': {
            borderRadius: '50px !important',
            width: 'fit-content',
            minWidth: 140
        },
    },
    dropdown: {
        position: 'absolute',
        borderRadius: 5,
        top: 40,
        right: 0,
        left: 0,
        zIndex: 1,
        boxShadow: '0px 7px 20px 3px rgb(0 0 0 / 75%)',
        padding: '8px 0',
        backgroundColor: theme.palette.background.paper,
    },
}));
const useButton = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            borderRadius: '50px !important',

        },


    },
}));

export default function HeaderStepper() {
    const step = useSelector(state => state.TicketBookingReducer.stepper)
    const dispatch = useDispatch()
    const dropdown = useDropDown();
    const btn = useButton();
    const list = useList();
    const [open, setOpen] = useState(false);

    const stepper = useStepper();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    useEffect(() => {
    // Tiếp theo làm dispatch 
        setActiveStep(step)
    }, [step])

    let tenDN = useSelector(state => state.UserReducer.tenDangNhap)

    let dropDown = () => {
        return (
            <div className={list.root}>
                <List component="nav" aria-label="secondary mailbox folders">
                    <NavLink to="/thongtincanhan" >
                        <ListItem button>
                            <ListItemText primary={tenDN ? 'Thông tin tài khoản' : ''} />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/admin" >
                        <ListItem button>
                            <ListItemText primary="Quản trị / Admin " />
                        </ListItem>
                    </NavLink>

                </List>
            </div>
        )
    }
    return (
        <header>
            <div className="navbar container">
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <div className={stepper.root}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </div>
                {/* Đăng nhập  */}
                <div className="heading__item__right">
                    <ClickAwayListener
                        mouseEvent="onMouseDown"
                        touchEvent="onTouchStart"
                        onClickAway={handleClickAway}
                    >
                        <div style={{ display: 'inline-block' }} className={dropdown.root}>
                            <Button className={btn.root} type="button" onClick={handleClick}>

                                {tenDN == '' ? <NavLink to="/dangnhap" > Đăng nhập</NavLink>
                                    : `Hi, ${tenDN}`}
                            </Button>

                            {open && tenDN ? (
                                <div className={dropdown.dropdown}>
                                    {dropDown()}
                                </div>
                            ) : null}
                        </div>
                    </ClickAwayListener>

                    {/* Đăng ký / đăng xuất */}
                    <span className={btn.root}>
                        <Button>

                            {tenDN == '' ?
                                <NavLink to='/dangky'>Đăng ký</NavLink> : <span onClick={() => dispatch(dangXuat())}>Đăng xuất</span>}
                        </Button>
                    </span>


                </div>
            </div>

        </header>
    )
}
