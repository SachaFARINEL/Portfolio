import * as React from 'react';
import Entete from './entete';
import Projets from './projets';
import MainPresentation from './mainPresentation';
import BarreSocial from './barreSocial';
import Documentations from './documentations';
import { Grid } from '@mui/material';




function App() {

  return (
    <>

      <Grid container height='90vh'>
        <Grid item xs={1} style={{ background: '#FAFAFF' }}></Grid>
        <Grid item xs={10} style={{ background: '#FAFAFF' }}>
          <Entete />
          <MainPresentation />
        </Grid>
        <Grid item xs={0.5} style={{ background: '#FAFAFF' }}></Grid>
        <Grid item xs={0.5}></Grid>
      </Grid>

      <Grid container >
        <Grid item xs={11.5} style={{ background: '#FAFAFF', borderBottomRightRadius: '8vh', height: '12vh' }}>
          <BarreSocial />
        </Grid>
      </Grid>

      <Grid container height='100vh'>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Grid container justifyContent="center">
            <Grid item xs={8} style={{ margin: '5vh' }}>
              <h1 id="mesProjets" style={{ fontFamily: 'Inter', fontSize: '2vw', color: '#221e41' }}>Mes projets <span style={{ fontSize: '1vw', color: '#757384', marginLeft: 40, fontWeight: 'lighter' }}>tout au long de l'année</span></h1>
            </Grid>
            <Grid item xs={10}>
              <Projets />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container height='90vh'>
        <Grid item xs={0.5} ></Grid>
        <Grid item xs={0.5} style={{ background: '#FAFAFF', borderTopLeftRadius: '8vh' }}></Grid>
        <Grid item xs={10} style={{ background: '#FAFAFF' }}>
          <Grid container justifyContent="center">
            <Grid item xs={8} style={{ margin: '5vh' }}>
              <h1 id="mesDocumentations" style={{ fontFamily: 'Inter', fontSize: '2vw', color: '#221e41' }}>Mes documentations produites <span style={{ fontSize: '1vw', color: '#757384', marginLeft: 40, fontWeight: 'lighter' }}>tout au long de l'année</span></h1>
            </Grid>
            <Grid item xs={10}>
              <Documentations />

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} style={{ background: '#FAFAFF' }}></Grid>
      </Grid>
    </>
  );
}

export default App;
