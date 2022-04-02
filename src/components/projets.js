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
                    style={{ marginBottom: 100 }}>

                    <Card>
                        <CardContent style={{ background: '#FAFAFF', paddingTop: 24 }}>
                            <Grid container>
                                <Grid item xs={7} style={{ borderRight: '1px solid grey' }}>
                                    <img style={{ width: '100%', paddingRight: 15 }} src='/assets/portail.svg'></img>
                                </Grid>
                                <Grid item xs={5} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <h1 style={{ fontFamily: 'Inter', color: '#998282', fontSize: '1.3vw' }}>Calculateur de cotes</h1>
                                    <span style={{ textAlign: 'center', fontFamily: 'Inter', fontSize: '0.9vw' }}>Projet de stage réalisé avec <br /><span style={{ color: '#5ED3F3', fontWeight: '600' }}>React JS </span>et <span style={{ color: '#007AC1', fontWeight: '600' }}>Material UI </span></span>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    {/* <a className='paperProjets' href={props.url} target="_blank"> */}



                    {/* <Grid
                        item
                        xs={12}
                        style={{ display: 'flex' }}
                    >

                        <img style={{ width: '50%' }} src={props.image}></img>

                    </Grid> */}

                    {/* <Grid item xs={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid red' }}>
                            <h1 style={{ fontFamily: 'Inter', fontSize: '1.5vw', color: '#221e41' }}>{props.title}</h1>
                            {props.description}
                            <button style={{ height: '3vh' }} class="btn btn--stripe">Button</button>
                        </Grid> */}


                </Grid>


            </Grid>
        </>
    )
};
export default Projets;