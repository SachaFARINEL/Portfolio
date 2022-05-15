import * as React from 'react';
import Entete from './entete';
import Titre from './titre';
import TitreModal from './titreModal';
import Greta from './greta';
import Projets from './projets';
import MainPresentation from './mainPresentation';
import BarreSocial from './barreSocial';
import Documentations from './documentations';
import Competences from './competences';
import { Grid } from '@mui/material';
import Presentation from './presentation';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SourceIcon from '@mui/icons-material/Source';


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
              <TitreModal
                id="maPresentation"
                titre="A propos"
                icon={<AccountBoxIcon />}
                button="Mon CV"
                url="assets/pdf/CV_FARINEL_Sacha.pdf"
              />
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
              <Titre
                id="leBTS"
                titre="Présentation du BTS"
                url="https://sio56.org/"
                icon={<AccountBalanceIcon />}
                button="Le site de la formation"
              />
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
              <Titre
                id="mesProjets"
                titre="Mes projets"
                url="https://promo22.sio56.org/sacha/E5/"
                icon={<SourceIcon />}
                button="Documentations et sources"
              />
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

      <Grid container style={{ margin: '5vh' }}>
        <Grid item md={1} xs={0}></Grid>
        <Grid item md={10} xs={12}>
          <Grid container justifyContent="center">
            <Grid item md={8} xs={10} style={{ margin: '5vh' }}>
              <TitreModal
                id="mesCompétences"
                titre="Compétences développées"
                icon={<CloudDownloadIcon />}
                button="Télécharger"
                url="assets/pdf/Preuves/FARINEL_Sacha_TableauDeSynthèse.pdf"
              />
            </Grid>
            <Grid item md={10} >
              <Competences />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>

      <Grid container>
        <Grid item md={1} xs={0} style={{ background: '#FAFAFF' }}></Grid>
        <Grid item md={10} xs={12} style={{ background: '#FAFAFF' }}>
          <Grid container justifyContent="center">
            <Grid item md={8} xs={10} style={{ margin: '5vh' }}>
              <TitreModal
                id="maVeille"
                titre="Veille technologique"
                icon={<CloudDownloadIcon />}
                button="Télécharger"
                url="assets/pdf/OrdinateurQuantique_VeilleTechnologique_FARINEL_Sacha.pdf"
              />
            </Grid>
            <Grid item md={10} >
              <Grid container justifyContent='center'>
                <Grid item md={8} xs={10} style={{ fontFamily: "Lato", fontSize: "1.2rem", color: "#757384", textAlign: 'justify' }}>
                  <p>L'atout principal de la veille technologique est d'identifier ou d'anticiper des innovations par secteurs d'activité. Les sources de veille technologique constituent une information stratégique incontournable pour devancer, développer et exploiter des inventions.</p>
                  <p>Pour ma veille technologique, j'ai choisi de m'intéresser à <strong style={{ color: 'black' }}>l'ordinateur quantique</strong>. J'explique dans celle-ci comment cela marche réellement, sur quels principes de la physique quantique il repose, mais aussi ce qu'il pourra apporter dans différents secteurs et les limites d'une telle technologie</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1} style={{ background: '#FAFAFF' }}></Grid>
      </Grid>


      <Grid container style={{ background: '#B2A0FF', borderTopRightRadius: '3rem', borderTopLeftRadius: '3rem', height: '10vh' }}>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Développé en ReactJS par © FARINEL Sacha
        </Grid>
      </Grid>

    </>
  );
}

export default App;
