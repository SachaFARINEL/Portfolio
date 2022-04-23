import { Accordion, AccordionSummary, AccordionDetails, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import greta from '../styles/greta.css'

const Greta = () => {


    return (
        <>
            <Grid container justifyContent="center">
                <Grid item md={8} xs={12}>
                    <Accordion style={{ background: "#FAFAFF" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontFamily: "Lato", fontSize: "1rem" }}>Formation</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontFamily: "Lato", fontSize: "0.9rem", color: "#757384" }}>
                                <p>La formation se déroule de manière condensée sur 9 mois dont 10 semaines de stage en entreprise</p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ background: "#FAFAFF" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontFamily: "Lato", fontSize: "1rem" }}>Prérequis</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontFamily: "Lato", fontSize: "0.9rem", color: "#757384" }}>
                                <p>Être titulaire d’une qualification de niveau 4 (baccalauréat) et/ou d’une expérience significative dans le domaine du numérique</p>
                                <p>Avoir une appétence pour le numérique</p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ background: "#FAFAFF" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontFamily: "Lato", fontSize: "1rem" }}>Objectifs</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontFamily: "Lato", fontSize: "0.9rem", color: "#757384" }}>
                                <p>Le BTS SIO forme des professionnel.le.s en capacité de participer au développement et au suivi du cycle de vie d’applications logicielles :</p>
                                <ul>
                                    <li> Définir les solutions adaptées en fonction du besoin des utilisateurs (analyse des besoins client interne et étude de l’offre de marché en progiciels)</li>

                                    <li> Concevoir, produire et maintenir des solutions d’infrastructures réseau ou des solutions applicatives</li>

                                    <li>Gérer et administrer un parc informatique (matériels et logiciels)</li>

                                    <li>Concevoir, modéliser et administrer des bases de données</li>

                                    <li>Assurer la maintenance des programmes informatiques.</li>

                                    <li>Rédiger les supports documentaires et assurer la formation des utilisateurs finaux.</li>

                                    <li>Être force de proposition dans l’amélioration et l’optimisation des logiciels en place.</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ background: "#FAFAFF" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontFamily: "Lato", fontSize: "1rem" }}>Epreuves de l’examen</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontFamily: "Lato", fontSize: "0.9rem", color: "#757384" }}>
                                <p>E1 – Culture et communication</p>
                                <p>E2 – Mathématiques pour l’informatique</p>
                                <p>E3 – Culture économique, juridique et managériale pour l’informatique</p>
                                <p>E4 – Support et mise à disposition de services informatiques</p>
                                <p>E5 – Conception et développement d’applications</p>
                                <p>E6 – Cybersécurité des services informatiques</p>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>





                </Grid>
            </Grid>
        </>
    )


};
export default Greta;