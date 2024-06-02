import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { PaletteMode, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import ToggleColorMode from './ToggleColorMode';
import GitIcon from '@mui/icons-material/GitHub';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="/">Smaple</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

interface FooterProps {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

const Footer = ({ mode, toggleColorMode }: FooterProps) => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
                bgcolor: 'absolute',
                marginTop: 'auto',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>
                    <Copyright />
                </div>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                    <IconButton
                        color="default"
                        href="https://github.com/mui"
                        sx={{ alignSelf: 'center' }}
                    >
                        <GitIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}

export default Footer