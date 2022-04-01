import { Grid, Box, Paper, Card, CardContent } from "@mui/material";
import projets from '../styles/projets.css'
import SquareFootIcon from '@mui/icons-material/SquareFoot';


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

                    <a className='paperProjets' href={props.url} target="_blank">
                        <Paper style={{ background: '#E1DBFF' }} elevation={6}>

                            <CardContent className='cardProjets'>
                                <Grid container
                                >
                                    {/* <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <h1 style={{ fontFamily: 'Inter', fontSize: '1.5vw', color: '#221e41' }}>{props.title}</h1>
                                    </Grid> */}
                                    <Grid item xs={8} style={{ display: 'flex', justifyContent: 'center' }} >
                                        <Card style={{ borderRadius: '2vh' }} elevation={0}>
                                            <CardContent style={{ objectFit: 'contain', background: '#F3F3F3' }} >
                                                <img style={{ width: '100%' }} src={props.image}></img>
                                            </CardContent>
                                        </Card>

                                    </Grid>

                                    <Grid item xs={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <h1 style={{ fontFamily: 'Inter', fontSize: '1.5vw', color: '#221e41' }}>{props.title}</h1>
                                        {props.description}
                                    </Grid>
                                </Grid>

                            </CardContent>

                        </Paper>
                    </a>
                </Grid>


            </Grid>
        </>
    )
};
export default Projets;