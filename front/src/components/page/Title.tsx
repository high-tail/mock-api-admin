import React from 'react';
import { Stack, Typography } from '@mui/material';
import { alpha, Box, Container } from '@mui/material';

const Title: React.FC = () => {
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
                            Mock API Admin
                        </Typography>
                        <Typography
                            textAlign="center"
                            color="text.secondary"
                            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                        >
                            Searching current mock-api's response and modifing response
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}

export default Title;