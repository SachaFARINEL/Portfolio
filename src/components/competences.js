import Preuve from './preuve';
import { Grid } from '@mui/material';
import competences from '../styles/competences.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';




const Competences = () => {
    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));


    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item xs={8}>
                    <h4 style={{ textAlign: 'center' }}>C1 - Gérer le patrimoine informatique </h4>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className='nomCategorie' >C1.1 - Recenser et identifier les ressources numériques</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C1 - Gérer le patrimoine informatique/C1.1 - Recenser et identifier les ressources numériques.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography className='nomCategorie' >C1.2 - Exploiter des référentiels, normes et standards adoptés par le prestataire informatique</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C1 - Gérer le patrimoine informatique/C1.2 - Exploiter des référentiels, normes et standards adoptés par le prestataire informatique.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography className='nomCategorie'>C1.3 - Mettre en place et vérifier les niveaux d’habilitation associés à un service</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C1 - Gérer le patrimoine informatique/C1.3 - Mettre en place et vérifier les niveaux d’habilitation associés à un service.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                            <Typography className='nomCategorie'>C1.4 - Vérifier les conditions de la continuité d’un service informatique</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C1 - Gérer le patrimoine informatique/C1.4 - Vérifier les conditions de la continuité d’un service informatique.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                            <Typography className='nomCategorie'>C1.5 - Gérer des sauvegardes</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C1 - Gérer le patrimoine informatique/C1.5 - Gérer des sauvegardes.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                            <Typography className='nomCategorie'>C1.6 - Vérifier le respect des règles d’utilisation des ressources numériques</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C1 - Gérer le patrimoine informatique/C1.6 - Vérifier le respect des règles d’utilisation des ressources numériques.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item xs={8}>
                    <h4 style={{ textAlign: 'center' }}>C2 - Répondre aux incidents et aux demandes d’assistance et d’évolution </h4>
                    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className='nomCategorie' >C2.1 - Collecter, suivre et orienter des demandes</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C2 - Répondre aux incidents et aux demandes d'assistance et d'évolution/C2.1 - Collecter, suivre et orienter des demandes.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography className='nomCategorie' >C2.2 - Traiter des demandes concernant les services réseau et système, applicatifs</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C2 - Répondre aux incidents et aux demandes d'assistance et d'évolution/C2.2 - Traiter des demandes concernant les services réseau et système, applicatifs.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography className='nomCategorie'>C2.3 - Traiter des demandes concernant les applications</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C2 - Répondre aux incidents et aux demandes d'assistance et d'évolution/C2.3 - Traiter des demandes concernant les applications.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item xs={8}>
                    <h4 style={{ textAlign: 'center' }}>C3 - Développer la présence en ligne de l’organisation </h4>
                    <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className='nomCategorie' >C3.1 - Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C3 - Développer la présence en ligne de l’organisation/C3.1 - Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography className='nomCategorie' >C3.2 - Référencer les services en ligne de l’organisation et mesurer leur visibilité</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C3 - Développer la présence en ligne de l’organisation/C3.2 - Référencer les services en ligne de l’organisation et mesurer leur visibilité.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography className='nomCategorie'>C3.3 - Participer à l’évolution d’un site Web exploitant les données de l’organisation</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C3 - Développer la présence en ligne de l’organisation/C3.3 - Participer à l’évolution d’un site Web exploitant les données de l’organisation.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item xs={8}>
                    <h4 style={{ textAlign: 'center' }}>C4 - Travailler en mode projet </h4>
                    <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className='nomCategorie' >C4.1 - Analyser les objectifs et les modalités d’organisation d’un projet</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C4 - Travailler en mode projet/C4.1 - Analyser les objectifs et les modalités d’organisation d’un projet.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography className='nomCategorie' >C4.2 - Planifier les activités</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C4 - Travailler en mode projet/C4.2 - Planifier les activités.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography className='nomCategorie'>C4.3 - Évaluer les indicateurs de suivi d’un projet et analyser les écarts</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C4 - Travailler en mode projet/C4.3 - Évaluer les indicateurs de suivi d’un projet et analyser les écarts.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item xs={8}>
                    <h4 style={{ textAlign: 'center' }}>C5 - Mettre à disposition des utilisateurs un service informatique </h4>
                    <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className='nomCategorie' >C5.1 - Réaliser les tests d’intégration et d’acceptation d’un service</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C5 - Mettre à disposition des utilisateurs un service informatique/C5.1 - Réaliser les tests d’intégration et d’acceptation d’un service.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography className='nomCategorie' >C5.2 - Déployer un service</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C5 - Mettre à disposition des utilisateurs un service informatique/C5.2 - Déployer un service.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography className='nomCategorie'>C5.3 - Accompagner les utilisateurs dans la mise en place d’un service</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C5 - Mettre à disposition des utilisateurs un service informatique/C5.3 - Accompagner les utilisateurs dans la mise en place d’un service.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item xs={8}>
                    <h4 style={{ textAlign: 'center' }}>C6 - Organiser son développement professionnel </h4>
                    <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className='nomCategorie' >C6.1 - Mettre en place son environnement d’apprentissage personnel</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C6 - Organiser son développement professionnel/C6.1 - Mettre en place son environnement d’apprentissage personnel.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography className='nomCategorie' >C6.2 - Mettre en œuvre des outils et stratégies de veille informationnelle</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C6 - Organiser son développement professionnel/C6.2 - Mettre en œuvre des outils et stratégies de veille informationnelle.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography className='nomCategorie'>C6.3 - Gérer son identité professionnelle</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C6 - Organiser son développement professionnel/C6.3 - Gérer son identité professionnelle.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography className='nomCategorie'>C6.4 - Développer son projet professionnel</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Preuve
                                url={"assets/pdf/Preuves/C6 - Organiser son développement professionnel/C6.4 - Développer son projet professionnel.pdf"}
                            />
                        </AccordionDetails>
                    </Accordion>
                </Grid>

            </Grid>
        </>
    )
};
export default Competences;
