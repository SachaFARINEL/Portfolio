import { Button, Grid, Typography } from "@mui/material";
import entete from '../styles/entete.css';
import '../styles/styles.css'


const Entete = () => {


    return (
        <>
            <div className="isDisplay">
                <Grid container justifyContent="center" className="showEntete">
                    <Grid item lg={8} xs={12} style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: 100 }} className='enteteDisplay'>
                        <ul style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                            <li>
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
            </div>
        </>
    )


};
export default Entete;