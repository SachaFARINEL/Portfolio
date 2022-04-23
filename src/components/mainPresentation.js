import { Grid } from "@mui/material";
import mainPresentation from '../styles/mainPresentation.css';
import button from '../styles/button.css'
import styles from '../styles/styles.css'

const MainPresentation = () => {

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item lg={5} md={5} xs={12} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <div className='transitionLeft'>
                        <h1 style={{ fontFamily: 'Inter', fontSize: '2.5rem', color: '#221e41' }}>Sacha FARINEL<span className="pointSlam">,</span> <br /> Étudiant en BTS SIO <br />option S<span className="pointSlam">.</span>L<span className="pointSlam">.</span>A<span className="pointSlam">.</span>M</h1>
                        <p style={{ fontFamily: 'Inter', color: '#757384', fontSize: '1.2rem' }}>Un résumé des compétences acquises <br /> lors de cette année au GRETA de Vannes.</p>
                        <p ><a href="#mesProjets"><button style={{ width: '30%', marginTop: '1rem', fontSize: '0.6rem' }} className="big-button">Mes projets</button></a></p>
                    </div>
                </Grid>
                <Grid item lg={3} md={3} xs={0} style={{ display: 'flex', justifyContent: 'end' }}>
                    <div className="imgDiv">
                        <img style={{ maxWidth: '90%' }} src="/assets/body.svg"></img>
                    </div>
                </Grid>
                <Grid container justifyContent="center" style={{ marginBottom: '3rem' }}>
                    <Grid item xs={8} style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="container" style={{ marginTop: '2rem' }}>
                            <div className="chevron"></div>
                            <div className="chevron"></div>
                            <div className="chevron"></div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
};
export default MainPresentation;