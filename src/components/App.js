import * as React from 'react';
import Entete from './entete';
import Greta from './greta';
import Projets from './projets';
import MainPresentation from './mainPresentation';
import BarreSocial from './barreSocial';
import Documentations from './documentations';
import Competences from './competences';
import { Button, Grid } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Presentation from './presentation';



function isDisplay() {

}


function App() {

  return (
    <>

      <Grid container>
        <Grid item lg={1} xs={0} style={{ background: '#FAFAFF' }}></Grid>
        <Grid item lg={10} xs={12} style={{ background: '#FAFAFF' }}>
          <Entete />
          <MainPresentation />
        </Grid>
        <Grid item lg={0.5} xs={0} style={{ background: '#FAFAFF' }}></Grid>
        <Grid item lg={0.5} xs={0}></Grid>
      </Grid>

      <Grid container>
        <Grid item lg={11.5} xs={12} style={{ background: '#FAFAFF', borderBottomRightRadius: '3rem' }}>
          <BarreSocial />
        </Grid>
      </Grid>

      <Grid container style={{ marginBottom: '4rem' }}>
        <Grid item md={1} xs={0}></Grid>
        <Grid item md={10} xs={12}>
          <Grid container justifyContent="center">

            <Grid item md={8} xs={10} style={{ margin: '2rem' }}>
              <h1 id="maPresentation" style={{ fontFamily: 'Inter', fontSize: '1.8rem', color: '#221e41' }}>A propos <Button href='assets/pdf/CV_FARINEL_Sacha.pdf' download="CV_FARINEL_Sacha" variant="outlined" size='small' startIcon={<CloudDownloadIcon />} style={{ marginLeft: '2rem', color: '#8A6FFF', borderColor: '#8A6FFF' }}>
                Mon CV
              </Button></h1>
            </Grid>
            <Grid item xs={10}>
              <Presentation />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container >
        <Grid item md={0.5} xs={0} ></Grid>
        <Grid item md={0.5} xs={0} style={{ background: '#FAFAFF', borderTopLeftRadius: '3rem', borderBottomLeftRadius: '3rem' }}></Grid>
        <Grid item md={10} xs={12} style={{ background: '#FAFAFF' }}>
          <Grid container justifyContent="center" style={{ paddingBottom: '3rem' }}>
            <Grid item md={8} xs={10} style={{ margin: '1rem' }}>
              <h1 id="leBTS" style={{ fontFamily: 'Inter', fontSize: '1.8rem', color: '#221e41', display: "flex", alignItems: "center" }}>Présentation du BTS <a style={{ display: "flex", alignItems: "center", marginLeft: "1rem" }} target='_blank' href="https://sio56.org"><img style={{ width: "1.5rem", marginTop: "0.3rem" }} src="assets/navigateur.gif"></img></a></h1>
              <span style={{ fontSize: "1.2rem", fontFamily: "Lato", color: "#757384" }}>Services informatiques aux organisations option solutions logicielles et applications métiers</span>
            </Grid>
            <Grid item xs={10} >
              <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
                <Greta />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={0.5} xs={0} style={{ background: '#FAFAFF', borderTopRightRadius: '3rem', borderBottomRightRadius: '3rem' }}></Grid>
        <Grid item xs={0.5}></Grid>
      </Grid>


      <Grid container>
        <Grid item md={1} xs={0}></Grid>
        <Grid item md={10} xs={12}>
          <Grid container justifyContent="center">
            <Grid item md={8} xs={10} style={{ margin: '1rem' }}>
              <h1 id="mesProjets" style={{ fontFamily: 'Inter', fontSize: '1.8rem', color: '#221e41' }}>Mes projets </h1>
            </Grid>
            <Grid item xs={10} >
              <Projets />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container style={{ marginTop: '2rem' }}>
        <Grid item md={0.5} xs={0} ></Grid>
        <Grid item md={0.5} xs={0} style={{ background: '#FAFAFF', borderTopLeftRadius: '3rem', borderBottomLeftRadius: '3rem' }}></Grid>
        <Grid item md={10} xs={12} style={{ background: '#FAFAFF', paddingBottom: '3rem' }}>
          <Grid container justifyContent="center">
            <Grid item md={8} xs={10} style={{ margin: '2rem' }}>
              <h1 id="mesDocumentations" style={{ fontFamily: 'Inter', fontSize: '1.8rem', color: '#221e41' }}>Documentations produites</h1>
            </Grid>
            <Grid item md={10} xs={10}>
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
        <Grid item md={1} xs={0} style={{ background: '#FAFAFF' }}></Grid>
      </Grid>

      <Grid container>
        <Grid item md={1} xs={0}></Grid>
        <Grid item md={10} xs={12}>
          <Grid container justifyContent="center">
            <Grid item md={8} xs={10} style={{ margin: '5vh' }}>
              <h1 id="mesCompétences" style={{ fontFamily: 'Inter', fontSize: '1.9rem', color: '#221e41' }}>Compétences développées <Button href='assets/pdf/Preuves/FARINEL_Sacha_TableauDeSynthèse.pdf' download="TableauDeSynthèse_FARINEL_Sacha" variant="outlined" size='small' startIcon={<CloudDownloadIcon />} style={{ marginLeft: 20, color: '#8A6FFF', borderColor: '#8A6FFF' }}>
                Télécharger
              </Button></h1>

            </Grid>
            <Grid item md={10} >
              <Competences />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </>
  );
}

export default App;
