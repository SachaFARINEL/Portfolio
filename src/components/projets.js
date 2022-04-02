import { Grid, Box, Paper, Card, CardContent } from "@mui/material";
import projets from '../styles/projets.css'
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import test from '../styles/test.scss'



const Projets = (props) => {
    return (
        <>
            <Grid
                container
                justifyContent="center"
            >

                <Grid
                    item
                    xs={8}
                    style={{ marginBottom: 50 }}>
                    <div className="divProjets">
                        <a className='cardProjets' target='_blank' href='https://hilarious-sprinkles-b1e969.netlify.app/'>
                            <Card>
                                <CardContent style={{ background: '#FAFAFF', paddingTop: 24, height: '20vh' }}>
                                    <Grid container>
                                        <Grid item xs={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                            <img style={{ width: '100%', paddingRight: 15 }} src='/assets/portail.svg'></img>
                                        </Grid>
                                        <Grid item xs={5} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <h1 style={{ fontFamily: 'Inter', color: '#998282', fontSize: '1.3vw' }}>Calculateur de cotes</h1>
                                            <span style={{ textAlign: 'center', fontFamily: 'Inter', fontSize: '0.9vw' }}>Projet de stage réalisé avec <br /><span style={{ color: '#5ED3F3', fontWeight: '600' }}>React JS </span>et <span style={{ color: '#007AC1', fontWeight: '600' }}>Material UI </span></span>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </a>
                    </div>



                </Grid>

                <Grid
                    item
                    xs={8}
                    style={{ marginBottom: 100 }}>
                    <div className="divProjets">
                        <Card>
                            <CardContent style={{ background: '#FAFAFF', paddingTop: 24, height: '20vh' }}>
                                <Grid container>
                                    <Grid item xs={5} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <h1 style={{ fontFamily: 'Inter', color: '#E8505B', fontSize: '1.3vw', textAlign: 'center' }}>Gestionnaire de rendez-vous</h1>
                                        <span style={{ textAlign: 'center', fontFamily: 'Inter', fontSize: '0.9vw' }}>Projet de formation réalisé avec <br /><span style={{ color: '#7377AD', fontWeight: '600' }}>PHP </span>et <span style={{ color: '#1064A5', fontWeight: '600' }}>jQuery </span></span>
                                    </Grid>
                                    <Grid item xs={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>

                                        <img style={{ width: '80%', paddingLeft: 15 }} src='/assets/promed2.svg'></img>

                                    </Grid>

                                </Grid>
                            </CardContent>
                        </Card>
                    </div>



                </Grid>


            </Grid >
        </>
    )
};
export default Projets;