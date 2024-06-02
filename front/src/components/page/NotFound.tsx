import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import WrongLocationIcon from '@mui/icons-material/WrongLocation';


const NotFound: React.FC = () => {
    return (
        <>
            <Box id="home"
                sx={() => ({
                    width: '100%',
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
                    <Typography component="h2" variant="h2" color="text.secondary">
                        <WrongLocationIcon fontSize='large'/ >&ensp;&ensp;Page Not Found
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Please check URL you inputted
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

export default NotFound;