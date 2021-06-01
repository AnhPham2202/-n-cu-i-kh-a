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
import { layPhimPhanTrang } from '../../Redux/Actions/AdminActions';

const columns = [
    { id: 'name', label: 'Tác vụ', minWidth: 170 },
    { id: 'code', label: 'Mã phim', minWidth: 100 },
    {
        id: 'population',
        label: 'Tên phim',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'size',
        label: 'Hình Ảnh',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'density',
        label: 'Mô tả',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'density',
        label: 'Ngày khởi chiếu',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'density',
        label: 'Đánh giá',
        minWidth: 170,
        align: 'center',
    },
];

function createData(tacVu, maPhim, tenPhim, hinhAnh, moTa, ngayKhoiChieu, danhGia) {
    return { tacVu, maPhim, tenPhim, hinhAnh, moTa, ngayKhoiChieu, danhGia };
}

const rows = [
    createData(1, 2, 3, 4, 5, 6 , 7),
];

const useTable = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function FilmManagement() {
    const dispatch = useDispatch()
    const thongTinPhimPhanTrang = useSelector(state => state.AdminReducer.phimPhanTrang)
    const table = useTable();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    console.log(thongTinPhimPhanTrang);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect(() => {
        dispatch(layPhimPhanTrang())
    }, [])

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
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
                            console.log(row);
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
                                        {row.hinhAnh}
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
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
