import { Grid } from "@mui/material";
import mainPresentation from '../styles/mainPresentation.css';
import button from '../styles/button.css'
import styles from '../styles/styles.css'

const MainPresentation = () => {

    return (
        <>
            <Grid container justifyContent="center" >
                <Grid item xs={5} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <div className='transitionLeft'>
                        <h1 style={{ fontFamily: 'Inter', fontSize: '3vw', color: '#221e41' }}>Sacha FARINEL<span className="pointSlam">,</span> <br /> Étudiant en BTS SIO <br />option S<span className="pointSlam">.</span>L<span className="pointSlam">.</span>A<span className="pointSlam">.</span>M</h1>
                        <p style={{ fontFamily: 'Inter', color: '#757384', fontSize: '1.5vw' }}>Un résumé des compétences acquises <br /> lors de cette année au GRETA de Vannes.</p>
                        <p ><a href="#mesProjets"><button style={{ width: '10vw', marginTop: 15 }} className="big-button">Mes projets</button></a></p>
                    </div>
                </Grid>
                <Grid item xs={3} style={{ display: 'flex', justifyContent: 'end' }}>
                    <img style={{ maxWidth: '90%' }} src="/assets/body.svg"></img>
                </Grid>
                <Grid item xs={8} style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="container" style={{ marginTop: 25 }}>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                    </div>
                </Grid>
            </Grid>

        </>
    )
};
export default MainPresentation;