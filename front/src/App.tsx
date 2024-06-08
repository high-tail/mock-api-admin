import React from 'react';
import { Routes, Route } from "react-router-dom";

import { PaletteMode, Box, Divider } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import getLPTheme from './components/page/getLPTheme';
import AppAppBar from './components/page/AppAppBar';

import Home from './components/home';
import Sample1Form from './components/sample/sample1';
import Sample2Form from './components/sample/sample2';
import Footer from './components/page/Footer';
import NotFound from './components/page/NotFound';


const App: React.FC = () => {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <Box sx={{ bgcolor: 'background.default', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Divider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sample1" element={<Sample1Form />} />
          <Route path="/sample2" element={<Sample2Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer mode={mode} toggleColorMode={toggleColorMode} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
