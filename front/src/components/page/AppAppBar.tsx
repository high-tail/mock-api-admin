import React, { ReactElement } from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';

import IconButton from '@mui/material/IconButton';
import GitIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';

interface AppAppBarProps {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

const AppAppBar = ({ mode, toggleColorMode }: AppAppBarProps) => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setOpen(false);
        }
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor:
                                theme.palette.mode === 'light'
                                    ? 'rgba(255, 255, 255, 0.4)'
                                    : 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            }}
                        >
                            <Link noWrap color="text.primary" href="/" sx={{
                                alignSelf: 'center',
                                ml: '10px',
                                mr: '10px',
                            }}>
                                Mock API Admin
                            </Link>
                            <MenuItem onClick={() => scrollToSection('home')}>
                                Home
                            </MenuItem>
                            <MenuItem onClick={() => scrollToSection('search')}>
                                Search
                            </MenuItem>
                            <MenuItem onClick={() => scrollToSection('howtouse')}>
                                How to use
                            </MenuItem>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                            <IconButton
                                color="default"
                                href="https://github.com/mui"
                                aria-label="GitHub"
                                sx={{ alignSelf: 'center' }}
                            >
                                <GitIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '30dvw',
                                        p: 2,
                                        backgroundColor: 'background.page',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            flexGrow: 1,
                                        }}
                                    >
                                        <IconButton onClick={toggleDrawer(false)}><CloseIcon /></IconButton>
                                        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                                    </Box>
                                    <MenuItem onClick={() => scrollToSection('home')}>
                                        Home
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('search')}>
                                        Search
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('howtouse')}>
                                        How to use
                                    </MenuItem>
                                    <Divider />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-end',
                                            flexGrow: 1,
                                        }}
                                    >
                                        <IconButton
                                            color="default"
                                            href="https://github.com/mui"
                                            aria-label="GitHub"
                                        >
                                            <GitIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default AppAppBar;