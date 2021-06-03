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
import { layPhimPhanTrang, xoaPhim } from '../../Redux/Actions/AdminActions';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import IconButton from '@material-ui/core/IconButton';
import { Fragment } from 'react';


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
    },
    container: {
        maxHeight: 440,
    },
});

    ;
export default function FilmManagement() {
    
    const rows = [];
    const dispatch = useDispatch()
    const thongTinPhimPhanTrang = useSelector(state => state.AdminReducer.phimPhanTrang)
    const table = useTable();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const tacVu = (maPhim) => {
        return (
            <Fragment>
                <label htmlFor="icon-button-file">
                    {/* ??????????????? */}
                    <IconButton onClick={() => dispatch(xoaPhim(maPhim))}  aria-label="delete film" component="span">
                        <DeleteIcon />
                    </IconButton>
                </label>
                <label onClick={() => console.log(2)} htmlFor="icon-button-file">
                    <IconButton aria-label="change film" component="span">
                        <CreateIcon />
                    </IconButton>
                </label>
                <label onClick={() => console.log(3)} htmlFor="icon-button-file">
                    <IconButton aria-label="add film" component="span">
                        <AddToPhotosIcon />
                    </IconButton>
                </label>
            </Fragment>
        )
    }
    useEffect(() => {
        dispatch(layPhimPhanTrang(page, rowsPerPage))
    }, [page,rowsPerPage])
    thongTinPhimPhanTrang.items?.map((phim, index) => {
        rows.push({
            tacVu: tacVu(phim.maPhim),
            maPhim: phim.maPhim,
            tenPhim: phim.tenPhim,
            hinhAnh: phim.hinhAnh,
            moTa: phim.moTa,
            ngayKhoiChieu: phim.ngayKhoiChieu,
            danhGia: phim.danhGia,
        })
    })
    console.log(rows);

    return (
        <Paper className={table.root}>
            <TableContainer className={table.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
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
                                        {row.ngayKhoiChieu}
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
                // className={}
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={thongTinPhimPhanTrang.totalCount??''}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
