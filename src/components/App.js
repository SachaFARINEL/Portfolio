import Entete from './entete';
import MainPresentation from './mainPresentation';
import BarreSocial from './barreSocial';
import { Grid } from '@mui/material';
import '../styles/App.css';



function App() {

  return (
    <>
      {/* <Body /> */}
      <Grid
        container
        justifyContent="center"
      >
        <Grid
          item
          xs={1}
          style={{ background: '#FAFAFF' }}
        >

        </Grid>

        <Grid
          item
          xs={10.5}
          style={{ background: '#FAFAFF', height: '90vh' }}
        >
          <Entete />
          <MainPresentation />
        </Grid>

        <Grid
          item
          xs={0.5}
          style={{ paddingLeft: '-50px' }}
        >
        </Grid>
      </Grid>

      <Grid container
        xs={11.5}
        style={{ background: '#FAFAFF', borderBottomRightRadius: '8vh', height: '20vh' }}
      >
        <BarreSocial />
      </Grid>
    </>
  );
}

export default App;
