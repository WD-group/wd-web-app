import Card from './components/card/mycard';
import Navbar from './components/navbar/mybar';
import Hero from './components/hero/hero';
import Footer from './components/footer/footer';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    h3: {
      fontWeight: 700,
      fontSize: "20px",
    },
    h4: {
      fontWeight: 500,
      fontSize: "14px",
    },
    h5: {
      fontWeight: 400,
      fontSize: "17px",
    },
    body2: {
      fontWeight: 700,
      fontSize: "14px",
    },
  },
  palette: {
    primary: {
      main: '#39108A',
      dark: '#5600E8',
    },
    secondary: {
      main: green[500],
    },
    background: {
      default: '#fff',
    }
  }
})


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Card
        image="./flash_mob_card_back.jpg"
        title="Flash Mob"
        subtitle="Prossimi eventi"
        text="Eventi in programma a cui poter partecipare, info sui flash mob e molto altro."
        alt="Flash Mob"
        />
      <Card
        image="./social_back.jpg"
        title="Social"
        subtitle="Eventi passati"
        text="Seguici su tutte le nostre pagine social per rimanere aggiornato e rivivere gli eventi già svolti."
        alt="Social"
        />
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
