import * as React from 'react';
import Entete from './entete';
import Projets from './projets';
import MainPresentation from './mainPresentation';
import BarreSocial from './barreSocial';
import Documentations from './documentations';
import Competences from './competences';
import { Button, Grid } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';





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
              <h1 id="mesProjets" style={{ fontFamily: 'Inter', fontSize: '2vw', color: '#221e41' }}>Mes projets </h1>
            </Grid>
            <Grid item xs={10}>
              <Projets />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container height='50vh'>
        <Grid item xs={0.5} ></Grid>
        <Grid item xs={0.5} style={{ background: '#FAFAFF', borderTopLeftRadius: '8vh', borderBottomLeftRadius: '8vh' }}></Grid>
        <Grid item xs={10} style={{ background: '#FAFAFF' }}>
          <Grid container justifyContent="center">
            <Grid item xs={8} style={{ margin: '5vh' }}>
              <h1 id="mesDocumentations" style={{ fontFamily: 'Inter', fontSize: '2vw', color: '#221e41' }}>Mes documentations produites</h1>
            </Grid>
            <Grid item xs={10}>
              <Grid container justifyContent='center'>
                <Documentations
                  image={'assets/nas3.svg'}
                  titre={["Mise en", <br />, "place d'un NAS"]}
                  modal={'assets/pdf/documentation/TP_NAS_Sacha_FARINEL.pdf'}
                  backgroundCouleur={'#E1DBFF'}
                />
                <Documentations
                  image={'assets/cloud3.svg'}
                  titre={"Installation de Nextcloud"}
                  modal={'assets/pdf/documentation/TP_NEXTCLOUD_Sacha_FARINEL.pdf'}
                  backgroundCouleur={'#FDE7E9'}
                />
                <Documentations
                  image={'assets/mitm3.svg'}
                  titre={"Les attaques Man In The Middle"}
                  modal={'assets/pdf/documentation/TP_MITM_Sacha_FARINEL.pdf'}
                  backgroundCouleur={'#CCF2FF'}
                />
                <Documentations
                  image={'assets/glpi.svg'}
                  titre={"Intégration et adaptation d'un service"}
                  modal={'assets/pdf/documentation/TP_GLPI_SACHA_FARINEL.pdf'}
                  backgroundCouleur={'#CDFFE8'}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} style={{ background: '#FAFAFF' }}></Grid>
      </Grid>

      <Grid container height='100vh'>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Grid container justifyContent="center">
            <Grid item xs={8} style={{ margin: '5vh' }}>
              <h1 id="mesProjets" style={{ fontFamily: 'Inter', fontSize: '2vw', color: '#221e41' }}>Mes compétences développées <Button href='#' download="TableauDeSynthèse_FARINEL_Sacha" variant="outlined" size='small' startIcon={<CloudDownloadIcon />} style={{ marginLeft: 20, color: '#8A6FFF', borderColor: '#8A6FFF' }}>
                Télécharger
              </Button></h1>

            </Grid>
            <Grid item xs={10}>
              <Competences />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
}

export default App;
