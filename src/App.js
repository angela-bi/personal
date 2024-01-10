import About from './components/About'
import Footer from './components/Footer';
import Projects from './components/Projects';
import Art from './components/Art';
import Experience from './components/Experience';
import './App.css';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import { React, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#818181',
    },
    info: {
      main: '#1976d2',
    }
  },
});

function App() {

  const ref1 = useRef(null);
  const handleClick1 = () => {
    console.log('click1')
    ref1.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const ref2 = useRef(null);
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const ref3 = useRef(null);
  const handleClick3 = () => {
    ref3.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
        </header>
        <main>
          <Container  maxWidth="md">
            <AppBar position="fixed" elevation={0} style={{color: 'transparent'}}>
              <Toolbar>
                  <Grid container sx={{ mx: 40, mb: -3}} spacing={2}>
                      <Grid item xs={2}>
                      <Box
                        component="img"
                        sx={{
                          width: 0.35,
                        }}
                        alt="icon"
                        src='/icon.png'
                      />
                          {/* <img alt="Bear logo" src="/icon.png"/> */}
                      </Grid>
                      <Grid item xs={10}>
                          <Box display="flex" justifyContent="flex-end">
                              <Button onClick={handleClick1} color='secondary'>Experience</Button>
                              <Button onClick={handleClick2} color='secondary'>Projects</Button>
                              <Button onClick={handleClick3} color='secondary'>Art</Button>
                          </Box>
                      </Grid>
                  </Grid>
              </Toolbar>
            </AppBar>
            
            <br/> <br/> <br/> <br/>
            <Stack spacing={5}>
              <About></About>
              <div ref={ref1}>
                <Experience></Experience>
              </div>
              <div ref={ref2}>
                <Projects></Projects>
              </div>
              <div ref={ref3}>
                <Art></Art>
              </div>
              <Footer></Footer>
            </Stack>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
