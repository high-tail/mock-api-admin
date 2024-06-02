import React from 'react';
import { Table, TablePagination, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider, Typography } from '@mui/material';
import { Box, Container, IconButton } from '@mui/material';

import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

import { useFetchEndpoints } from '../../lib/hook/useFetchEndPoints';
import Howtouse from '../howto';
import Title from '../page/Title';
import SearchBar from './Search';


const Home: React.FC = () => {
    const { data, error, loading } = useFetchEndpoints();

    const [rows, setRows] = React.useState(data);
    const [page, setPage] = React.useState(0);
    const [searched, setSearched] = React.useState("");
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    if (loading) return <><h1>LOADING...</h1></>;
    if (error) return <><h1>{error.message}</h1></>;

    return (
        <>
            <Title />
            <Divider />
            <Container
                id="search"
                sx={{
                    pt: { xs: 4, sm: 12 },
                    pb: { xs: 8, sm: 16 },
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box sx={{
                    width: '100%',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Typography component="h2" variant="h2" color="text.primary">
                        Mock API List
                    </Typography>
                    <Paper sx={{ p: '10px', width: '100%', overflow: 'hidden' }}>
                        <SearchBar
                            initialRows={data}
                            searched={searched}
                            setRows={setRows}
                            setSearched={setSearched} />
                        <TableContainer component={Paper}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">
                                            #
                                        </TableCell>
                                        <TableCell align="center">
                                            ENDPOINT
                                        </TableCell>
                                        <TableCell align="right">
                                            METHOD
                                        </TableCell>
                                        <TableCell align="right">
                                            LINK
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                        <TableRow key={i} hover>
                                            <TableCell align="left">
                                                {i + 1}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.path}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.methods}
                                            </TableCell>
                                            <TableCell align="right">
                                                <IconButton
                                                    color="default"
                                                    href={row.path}
                                                    sx={{ alignSelf: 'center' }}
                                                >
                                                    <DeveloperModeIcon />
                                                </IconButton>

                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 15, 20]}
                            component="div"
                            count={rows?.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Box>
            </Container>
            <Divider />
            <Howtouse />
        </>
    );
}

export default Home;