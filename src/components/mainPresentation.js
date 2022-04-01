import { Grid } from "@mui/material";
import mainPresentation from '../styles/mainPresentation.css';
import button from '../styles/button.css'
import styles from '../styles/styles.css'

const MainPresentation = () => {

    return (
        <>
            <Grid
                container
                justifyContent="center"
            >

                <Grid
                    item
                    xs={5}
                    style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
                >
                    <div className='transitionLeft'>
                        <h1 style={{ fontFamily: 'Inter', fontSize: '3vw', color: '#221e41' }}>Sacha FARINEL<span className="pointSlam">,</span> <br /> Étudiant en BTS SIO <br />option S<span className="pointSlam">.</span>L<span className="pointSlam">.</span>A<span className="pointSlam">.</span>M</h1>
                        <p style={{ fontFamily: 'Inter', color: '#757384', fontSize: '1.5vw' }}>Un résumé des compétences acquises <br /> lors de cette année.</p>

                        <p><button style={{ width: '10vw' }} class="big-button">Mes projets</button></p>
                    </div>

                </Grid>
                <Grid
                    item
                    xs={3}
                    style={{ display: 'flex', justifyContent: 'end' }}
                >
                    <img style={{ maxWidth: '90%' }} src="/assets/body.svg"></img>
                </Grid>

            </Grid>
        </>
    )
};
export default MainPresentation;