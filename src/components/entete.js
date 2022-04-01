import { Button, Grid, Typography } from "@mui/material";
import entete from '../styles/entete.css';



const Entete = () => {


    return (
        <>
            <Grid
                container
                justifyContent="center"
            >

                <Grid
                    item
                    xs={8}
                    style={{ height: '10vh', display: 'flex', alignItems: 'center', marginBottom: 100 }}>

                    <Grid
                        container
                    >

                        <Grid
                            item
                            xs={9}
                            style={{ display: 'flex' }}>

                            <Grid
                                container
                                alignItems="center"
                            >
                                <Grid
                                    item
                                    xs={2}
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <a href="#"><img style={{ maxWidth: 50, marginBottom: 5 }} src="/assets/logo.png" alt="My Happy SVG" /></a>
                                </Grid>
                                <Grid
                                    item
                                    xs={2}
                                    style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Typography className='menuHeader'>About</Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={2}
                                    style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Typography className='menuHeader'>Projets</Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={2}
                                    style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Typography className='menuHeader'>Infos</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid
                            item
                            xs={3}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                            <Button variant="contained" size="small" style={{ marginRight: 10, paddingLeft: 10, paddingRight: 10, background: '#00ADFF', fontFamily: 'Inter' }}>
                                Let's talk
                            </Button>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </>
    )


};
export default Entete;