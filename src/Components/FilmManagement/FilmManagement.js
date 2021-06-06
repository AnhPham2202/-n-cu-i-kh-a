import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { chinhSuaPhim, layPhimPhanTrang, xoaPhim } from '../../Redux/Actions/AdminActions';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import IconButton from '@material-ui/core/IconButton';
import { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';





const columns = [
    { id: 'name', label: 'Tác vụ', minWidth: 70, maxWidth: 70 },
    { id: 'code', label: 'Mã phim', minWidth: 90 },
    {
        id: 'population',
        label: 'Tên phim',
        minWidth: 120,
        align: 'center',
    },
    {
        id: 'size',
        label: 'Hình Ảnh',
        minWidth: 120,
        align: 'center',
    },
    {
        id: 'desc',
        label: 'Mô tả',
        minWidth: 320,
        align: 'center',
    },
    {
        id: 'coming-date',
        label: 'Ngày khởi chiếu',
        minWidth: 215,
        align: 'center',
    },
    {
        id: 'rate',
        label: 'Đánh giá',
        minWidth: 100,
        align: 'center',
    },
];


const useTable = makeStyles({
    root: {
        width: '100%',
        '& .MuiTableCell-stickyHeader': {
            background: 'pink'
        }

    },
    container: {
        maxHeight: 440,

    },

});

const useForm = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0),
            width: '50%',
            margin: '20px 0px',
            padding: '0 10px 0 0'

        },
        '& .MuiInput-underline': {
            width: '100%'
        }
    },
    width100: {
        width: '100% !important',

    }
}));



export default function FilmManagement() {
    const rows = [];
    const dispatch = useDispatch()
    const thongTinPhimPhanTrang = useSelector(state => state.AdminReducer.phimPhanTrang)
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [maPhim, setMaPhim] = useState()
    const [biDanh, setBiDanh] = useState()
    const [tenPhim, setTenPhim] = useState()
    const [ngayKhoiChieu, setNgayKhoiChieu] = useState()
    const [trailer, setTrailer] = useState()
    const [moTa, setMoTa] = useState()
    const [danhGia, setDanhGia] = useState()
    const [hinhAnh, setHinhAnh] = useState()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const [itemIndex, setItemIndex] = useState(0);

    const table = useTable();
    const form = useForm();

    // working on 



    const onSubmit = () => {
        let ngayKhoiChieuFormat = ngayKhoiChieu.split('T')[0].split('-').reverse().join('/');
        let formData = new FormData()
        let phimChinhSua = {
            maNhom: 'GP03',
            danhGia: danhGia,
            maPhim: maPhim,
            hinhAnh: hinhAnh,
            tenPhim: tenPhim,
            moTa: moTa,
            trailer: trailer,
            biDanh: biDanh,
            ngayKhoiChieu: ngayKhoiChieuFormat
        }
        for (let key in phimChinhSua) {
            formData.append(key, phimChinhSua[key])
        }
        dispatch(chinhSuaPhim(formData))

    }
    console.log(ngayKhoiChieu);

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
    const handleTenPhim = (event) => {
        setTenPhim(event.target.value)
    }

    const handleBiDanh = (event) => {
        setBiDanh(event.target.value)
    }

    const handleTrailer = (event) => {
        setTrailer(event.target.value)
    }

    const handleMoTa = (event) => {
        setMoTa(event.target.value)
    }

    const handleNgayKhoiChieu = (event) => {
        setNgayKhoiChieu(event.target.value)
    }

    const handleDanhGia = (event) => {
        setDanhGia(event.target.value)
    }
    const handleHinhAnh = (event) => {
        setHinhAnh(event.target.files[0])
    }

    const descriptionElementRef = React.useRef(null);
    useEffect(() => {
        dispatch(layPhimPhanTrang(page + 1, rowsPerPage))
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
        if (open == true) { // check vì nếu không check khi submit thì setOpen của Mui Dialog sẽ set để tắt form thì sẽ chạy lại cả useEffect thì nó sẽ set lại tên cũ đang có sẵn trước khi kịp update lên api
            setMaPhim(thongTinPhimPhanTrang.items?.[itemIndex].maPhim)
            setBiDanh(thongTinPhimPhanTrang.items?.[itemIndex].biDanh)
            setTenPhim(thongTinPhimPhanTrang.items?.[itemIndex].tenPhim)
            setTrailer(thongTinPhimPhanTrang.items?.[itemIndex].trailer)
            setMoTa(thongTinPhimPhanTrang.items?.[itemIndex].moTa)
            setDanhGia(thongTinPhimPhanTrang.items?.[itemIndex].danhGia)
            setNgayKhoiChieu(thongTinPhimPhanTrang.items?.[itemIndex].ngayKhoiChieu)
        }
        console.log('again');


    }, [page, rowsPerPage, open, itemIndex])

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    const formFilmInfo = () => {
        return (
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Thay đổi thông tin phim</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            onSubmit()
                        }} className={form.root} noValidate autoComplete="off">
                            <TextField
                                id="maPhim"
                                label="Mã phim"
                                defaultValue='Loading...'
                                value={maPhim}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                id="biDanh"
                                label="Bí danh"
                                defaultValue='Loading...'
                                value={biDanh}
                                onChange={handleBiDanh}
                            />
                            <TextField
                                id="tenPhim"
                                label="Tên phim"
                                defaultValue='Loading...'
                                value={tenPhim}
                                onChange={handleTenPhim}
                            />
                            <TextField
                                id="ngayKhoiChieu"
                                label="Ngày khởi chiếu"
                                defaultValue='Loading...'
                                value={ngayKhoiChieu?.replace('T', ' ')}
                                onChange={handleNgayKhoiChieu}
                            />
                            <TextField
                                id="trailer"
                                label="Trailer"
                                defaultValue='Loading...'
                                className={form.width100}
                                value={trailer}
                                onChange={handleTrailer}
                            />
                            <TextField
                                id="hinhAnh"
                                label="Hình ảnh"
                                type="file"
                                className={form.width100}
                                onChange={handleHinhAnh}
                            />
                            <TextField
                                id="moTa"
                                label="Mô tả"
                                defaultValue='Loading...'
                                className={form.width100}
                                value={moTa}
                                onChange={handleMoTa}
                                multiline
                            />
                            <TextField
                                id="danhGia"
                                label="Đánh giá"
                                defaultValue='Loading...'
                                className={form.width100}
                                value={danhGia}
                                onChange={handleDanhGia}
                            />
                            {/* Để tạo ra type submit cho nút thay đổi ngoài form */}
                            <button onClick={handleClose} style={{ display: 'none' }} type='submit'></button>
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }

    const tacVu = (maPhim, itemIndex) => {
        return (
            <Fragment>
                <label htmlFor="icon-button-file">
                    <IconButton onClick={() => dispatch(xoaPhim(maPhim))} aria-label="delete film" component="span">
                        <DeleteIcon />
                    </IconButton>
                </label>
                <label onClick={() => {
                    handleClickOpen('paper')()
                    setItemIndex(itemIndex)
                }} htmlFor="icon-button-file">
                    <IconButton aria-label="change film" component="span">
                        <CreateIcon />
                    </IconButton>
                </label>
                <label onClick={() => console.log(3)} htmlFor="icon-button-file">
                    <IconButton aria-label="add film" component="span">
                        <AddToPhotosIcon />
                    </IconButton>
                </label>
                {formFilmInfo()}
            </Fragment>
        )
    }
    thongTinPhimPhanTrang.items?.map((phim, index) => {
        rows.push({
            tacVu: tacVu(phim.maPhim, index),
            maPhim: phim.maPhim,
            tenPhim: phim.tenPhim,
            hinhAnh: phim.hinhAnh,
            moTa: phim.moTa,
            ngayKhoiChieu: phim.ngayKhoiChieu,
            danhGia: phim.danhGia,
        })
    })



    return (
        <Paper className={table.root}>
            <TableContainer className={table.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead className={table.header}>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    <TableCell key={i} >
                                        {row.tacVu}
                                    </TableCell>
                                    <TableCell key={i} >
                                        {row.maPhim}
                                    </TableCell>
                                    <TableCell key={i} >
                                        {row.tenPhim}
                                    </TableCell>
                                    <TableCell key={i} >
                                        <img style={{
                                            width: '120px'
                                        }} src={row.hinhAnh} />
                                    </TableCell>
                                    <TableCell key={i} >
                                        {row.moTa}
                                    </TableCell>
                                    <TableCell key={i} >
                                        {row.ngayKhoiChieu.replace('T', ' lúc ')}
                                    </TableCell>
                                    <TableCell key={i} >
                                        {row.danhGia}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={thongTinPhimPhanTrang.totalCount ?? ''}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
