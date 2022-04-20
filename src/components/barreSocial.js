import { Grid } from '@mui/material';
import barreSocial from '../styles/barreSocial.css'
import '../styles/styles.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const BarreSocial = () => {

    return (
        <>
            <Grid container >
                <Grid item xs={10}>
                    <h1 className='transitionLeft' style={{ borderTop: '1px solid #E3E2EF', marginTop: 12 }}></h1>
                </Grid>
                <Grid item xs={1} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <a href='https://github.com/SachaFARINEL'><GitHubIcon className='git' style={{ color: '#757384' }} /></a>
                    <a href='https://www.linkedin.com/in/farinelsacha/'><LinkedInIcon className='link' style={{ color: '#757384' }} /></a>
                    <a href='https://twitter.com/FarinelSacha'><TwitterIcon className='twitter' style={{ color: '#757384' }} /></a>
                </Grid>
            </Grid>
        </>
    )
};
export default BarreSocial;
