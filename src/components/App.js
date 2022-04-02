import Entete from './entete';
import Projets from './projets';
import MainPresentation from './mainPresentation';
import BarreSocial from './barreSocial';
import { Grid } from '@mui/material';
import '../styles/App.css';
import * as React from 'react';




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
        style={{ background: '#FAFAFF', borderBottomRightRadius: '8vh', height: '12vh' }}
      >
        <BarreSocial />
      </Grid>

      <Grid
        container
        justifyContent="center"
      >
        <Grid
          item
          xs={1}

        ></Grid>
        <Grid
          item
          xs={10.5}
        >

          <Grid
            container
            justifyContent="center"
          >
            <Grid
              item
              xs={8}
              style={{ margin: 20 }}
            >
              <h1 id="mesProjets" style={{ fontFamily: 'Inter', fontSize: '2vw', color: '#221e41' }}>Mes projets <span style={{ fontSize: '1vw', color: '#757384', marginLeft: 40 }}>tout au long de l'année</span></h1>
            </Grid>
            <Grid item xs={10}>
              <Projets />

            </Grid>
          </Grid>

        </Grid>
        <Grid
          item
          xs={0.5}>

        </Grid>
      </Grid>
    </>
  );
}

export default App;
