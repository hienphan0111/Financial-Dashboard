import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './scences/navbar';
import Dashboard from '@/scences/dashboard';

function App() {

  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/predictions" element={<div>Prediction page</div>} />
          </Routes>
        </Box>
        Hi
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
