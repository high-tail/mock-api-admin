import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { alpha, Container, Box, Stack, Typography, TextField, Button } from '@mui/material';

import FlashPage from '../page/FlashPage';
import { useFetchSample1 } from '../../lib/hook/sample/useFetchSample';
import client from "../../lib/api/client";


const Sample1: React.FC = () => {
    const { data, error, loading } = useFetchSample1();

    const [formdId, setId] = React.useState(data?.id);
    const [formData, setData] = React.useState(data?.id);

    const [flashMessage, setFlashMessage] = React.useState(false);
    const [responseCode, setResponseCode] = React.useState(200);

    const changeIdHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setId(event.target.value);
    };

    const changeDataHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData(event.target.value);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        client.post("/api/v1/sample1", { id: formdId, data: formData }, {
            headers: {
                contentType: 'application/json',
            }
        }).then((response) => {
            setFlashMessage(true);
            setResponseCode(response.status);
        }).catch((error) => {
            console.log(error);
        });
    }

    if (loading) return <><h1>LOADING...</h1></>;
    if (error) return <><h1>{error.message}</h1></>;

    return (
        <>
            <Box id="home"
                sx={(theme) => ({
                    width: '100%',
                    backgroundImage:
                        theme.palette.mode === 'light'
                            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                    backgroundSize: '100% 70%',
                    backgroundRepeat: 'no-repeat',
                })}>
                <Container
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
                    <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                        <Typography
                            variant="h1"
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                                color: (theme) => theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                        >
                            /sample1
                        </Typography>
                    </Stack>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>
                                        <TextField defaultValue={formdId} sx={{
                                            width: "100%"
                                        }} onChange={(event) => changeIdHandler(event)} />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Data</TableCell>
                                    <TableCell>
                                        <TextField defaultValue={formData} sx={{
                                            width: "100%"
                                        }} onChange={(event) => changeDataHandler(event)} />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {flashMessage && <FlashPage statusCode={responseCode} message='sample1' setFlashMessage={setFlashMessage} />}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexGrow: 1,
                    }}>
                        <Button type='submit' variant='text' color='primary' size='large' onClick={(e) => handleSubmit(e)}>Save</Button>
                        <Button type='button' href='/' size='large'>Home</Button>
                    </Box>
                    
                </Container>
            </Box>
        </>
    );
}

export default Sample1;