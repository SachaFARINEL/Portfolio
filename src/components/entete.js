import { Button, Grid, Typography } from "@mui/material";
import entete from '../styles/entete.css';
import '../styles/styles.css'


const Entete = () => {


    return (
        <>

            <Grid container justifyContent="center">
                <Grid item xs={8} style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: 100 }}>
                    {/* <Grid container >
                        <Grid item xs={9} style={{ display: 'flex' }}>
                            <Grid container alignItems="center">
                                <Grid item xs={3} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <h6 className='menuHeader'>About</h6>
                                </Grid>
                                <Grid item xs={3} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <a href="#mesProjets"><h6 className='menuHeader'>Projets</h6></a>
                                </Grid>
                                <Grid item xs={3} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <a href="#mesDocumentations"><h6 className='menuHeader'>Documentations</h6></a>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                            <Button variant="contained" size="small" style={{ marginRight: 10, paddingLeft: 10, paddingRight: 10, background: '#00ADFF', fontFamily: 'Inter' }}>
                                Let's talk
                            </Button>
                        </Grid>
                    </Grid> */}
                    <ul style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                        <li style={{ display: "flex" }}>
                            <a href='#maPresentation' className="menuHeader">A propos</a>
                        </li>
                        <li >
                            <a href='#leBTS' className="menuHeader">BTS</a>
                        </li>
                        <li >
                            <a href="#mesProjets" className="menuHeader">Projets</a>
                        </li>
                        <li >
                            <a href="#mesDocumentations" className="menuHeader" >Documentations</a>
                        </li>
                        <li >
                            <a href='#mesCompétences' className="menuHeader">Compétences</a>
                        </li>
                        <li >
                            <a href='#maVeille' className="menuHeader">Veille technologique</a>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </>
    )


};
export default Entete;