import Entete from './entete';
import Corp from './corp';
import { Button, Grid, Typography } from '@mui/material';
import '../styles/App.css';
import Body from './body'
import ResponsiveAppBar from './responsiveAppBar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


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
          <Corp />
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
        <Grid item xs={11}>
          <h1 style={{ borderTop: '1px solid #757384', marginTop: 12 }}></h1>
        </Grid>
        <Grid item xs={1} style={{ display: 'flex', justifyContent: 'space-around' }}>
          <a href='https://github.com/SachaFARINEL'><GitHubIcon style={{ color: '#757384' }} /></a> <LinkedInIcon style={{ color: '#757384' }} /> <TwitterIcon style={{ color: '#757384' }} />
        </Grid>
      </Grid>

    </>
  );
}

export default App;
