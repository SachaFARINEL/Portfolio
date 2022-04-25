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
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';




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
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem' }} />}
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
                <Grid item md={8} xs={10}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className='nomCategorie' style={{ fontFamily: "Lato", fontSize: '1.2rem' }}>C1 - Gérer le patrimoine informatique</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ fontFamily: "Lato", fontSize: '1rem' }} className="AccordionPreuves">
                            <p><a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C1%20-%20G%c3%a9rer%20le%20patrimoine%20informatique/C1.1%20-%20Recenser%20et%20identifier%20les%20ressources%20num%c3%a9riques.pdf">C1.1 - Recenser et identifier les ressources numériques</a></p>
                            <p><a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C1%20-%20G%c3%a9rer%20le%20patrimoine%20informatique/C1.2%20-%20Exploiter%20des%20r%c3%a9f%c3%a9rentiels,%20normes%20et%20standards%20adopt%c3%a9s%20par%20le%20prestataire%20informatique.pdf">C1.2 - Exploiter des référentiels, normes et standards adoptés par le prestataire informatique </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C1%20-%20G%c3%a9rer%20le%20patrimoine%20informatique/C1.3%20-%20Mettre%20en%20place%20et%20v%c3%a9rifier%20les%20niveaux%20d%e2%80%99habilitation%20associ%c3%a9s%20%c3%a0%20un%20service.pdf"> C1.3 - Mettre en place et vérifier les niveaux d’habilitation associés à un service </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C1%20-%20G%c3%a9rer%20le%20patrimoine%20informatique/C1.4%20-%20V%c3%a9rifier%20les%20conditions%20de%20la%20continuit%c3%a9%20d%e2%80%99un%20service%20informatique.pdf"> C1.4 - Vérifier les conditions de la continuité d’un service informatique </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C1%20-%20G%c3%a9rer%20le%20patrimoine%20informatique/C1.5%20-%20G%c3%a9rer%20des%20sauvegardes.pdf"> C1.5 - Gérer des sauvegardes </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C1%20-%20G%c3%a9rer%20le%20patrimoine%20informatique/C1.6%20-%20V%c3%a9rifier%20le%20respect%20des%20r%c3%a8gles%20d%e2%80%99utilisation%20des%20ressources%20num%c3%a9riques.pdf"> C1.6 - Vérifier le respect des règles d’utilisation des ressources numériques </a> </p>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item md={8} xs={10}>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className='nomCategorie' style={{ fontFamily: "Lato", fontSize: '1.2rem' }}>C2 - Répondre aux incidents et aux demandes d’assistance et d’évolution </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ fontFamily: "Lato", fontSize: '1rem' }}>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C2%20-%20R%c3%a9pondre%20aux%20incidents%20et%20aux%20demandes%20d'assistance%20et%20d'%c3%a9volution/C2.1%20-%20Collecter,%20suivre%20et%20orienter%20des%20demandes.pdf"> C2.1 - Collecter, suivre et orienter des demandes </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C2%20-%20R%c3%a9pondre%20aux%20incidents%20et%20aux%20demandes%20d'assistance%20et%20d'%c3%a9volution/C2.2%20-%20Traiter%20des%20demandes%20concernant%20les%20services%20r%c3%a9seau%20et%20syst%c3%a8me,%20applicatifs.pdf"> C2.2 - Traiter des demandes concernant les services réseau et système, applicatifs </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C2%20-%20R%c3%a9pondre%20aux%20incidents%20et%20aux%20demandes%20d'assistance%20et%20d'%c3%a9volution/C2.3%20-%20Traiter%20des%20demandes%20concernant%20les%20applications.pdf"> C2.3 - Traiter des demandes concernant les applications </a> </p>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item md={8} xs={10}>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className='nomCategorie' style={{ fontFamily: "Lato", fontSize: '1.2rem' }}>C3 - Développer la présence en ligne de l’organisation </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ fontFamily: "Lato", fontSize: '1rem' }}>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C3%20-%20D%c3%a9velopper%20la%20pr%c3%a9sence%20en%20ligne%20de%20l%e2%80%99organisation/C3.1%20-%20Participer%20%c3%a0%20la%20valorisation%20de%20l%e2%80%99image%20de%20l%e2%80%99organisation%20sur%20les%20m%c3%a9dias%20num%c3%a9riques%20en%20tenant%20compte%20du%20cadre%20juridique%20et%20des%20enjeux%20%c3%a9conomiques.pdf"> C3.1 - Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C3%20-%20D%c3%a9velopper%20la%20pr%c3%a9sence%20en%20ligne%20de%20l%e2%80%99organisation/C3.2%20-%20R%c3%a9f%c3%a9rencer%20les%20services%20en%20ligne%20de%20l%e2%80%99organisation%20et%20mesurer%20leur%20visibilit%c3%a9.pdf"> C3.2 - Référencer les services en ligne de l’organisation et mesurer leur visibilité </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C3%20-%20D%c3%a9velopper%20la%20pr%c3%a9sence%20en%20ligne%20de%20l%e2%80%99organisation/C3.3%20-%20Participer%20%c3%a0%20l%e2%80%99%c3%a9volution%20d%e2%80%99un%20site%20Web%20exploitant%20les%20donn%c3%a9es%20de%20l%e2%80%99organisation.pdf"> C3.3 - Participer à l’évolution d’un site Web exploitant les données de l’organisation </a> </p>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item md={8} xs={10}>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className='nomCategorie' style={{ fontFamily: "Lato", fontSize: '1.2rem' }}>C4 - Travailler en mode projet </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ fontFamily: "Lato", fontSize: '1rem' }}>

                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C4%20-%20Travailler%20en%20mode%20projet/C4.1%20-%20Analyser%20les%20objectifs%20et%20les%20modalit%c3%a9s%20d%e2%80%99organisation%20d%e2%80%99un%20projet.pdf"> C4.1 - Analyser les objectifs et les modalités d’organisation d’un projet </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C4%20-%20Travailler%20en%20mode%20projet/C4.2%20-%20Planifier%20les%20activit%c3%a9s.pdf"> C4.2 - Planifier les activités </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C4%20-%20Travailler%20en%20mode%20projet/C4.3%20-%20%c3%89valuer%20les%20indicateurs%20de%20suivi%20d%e2%80%99un%20projet%20et%20analyser%20les%20%c3%a9carts.pdf"> C4.3 - Évaluer les indicateurs de suivi d’un projet et analyser les écarts </a> </p>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item md={8} xs={10}>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className='nomCategorie' style={{ fontFamily: "Lato", fontSize: '1.2rem' }}>C5 - Mettre à disposition des utilisateurs un service informatique</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ fontFamily: "Lato", fontSize: '1rem' }}>

                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C5%20-%20Mettre%20%c3%a0%20disposition%20des%20utilisateurs%20un%20service%20informatique/C5.1%20-%20R%c3%a9aliser%20les%20tests%20d%e2%80%99int%c3%a9gration%20et%20d%e2%80%99acceptation%20d%e2%80%99un%20service.pdf"> C5.1 - Réaliser les tests d’intégration et d’acceptation d’un service </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C5%20-%20Mettre%20%c3%a0%20disposition%20des%20utilisateurs%20un%20service%20informatique/C5.2%20-%20D%c3%a9ployer%20un%20service.pdf"> C5.2 - Déployer un service </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C5%20-%20Mettre%20%c3%a0%20disposition%20des%20utilisateurs%20un%20service%20informatique/C5.3%20-%20Accompagner%20les%20utilisateurs%20dans%20la%20mise%20en%20place%20d%e2%80%99un%20service.pdf"> C5.3 - Accompagner les utilisateurs dans la mise en place d’un service </a> </p>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item md={8} xs={10}>
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className='nomCategorie' style={{ fontFamily: "Lato", fontSize: '1.2rem' }}>C6 - Organiser son développement professionnel</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ fontFamily: "Lato", fontSize: '1rem' }}>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C6%20-%20Organiser%20son%20d%c3%a9veloppement%20professionnel/C6.1%20-%20Mettre%20en%20place%20son%20environnement%20d%e2%80%99apprentissage%20personnel.pdf"> C6.1 - Mettre en place son environnement d’apprentissage personnel </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C6%20-%20Organiser%20son%20d%c3%a9veloppement%20professionnel/C6.2%20-%20Mettre%20en%20%c5%93uvre%20des%20outils%20et%20strat%c3%a9gies%20de%20veille%20informationnelle.pdf"> C6.2 - Mettre en œuvre des outils et stratégies de veille informationnelle </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C6%20-%20Organiser%20son%20d%c3%a9veloppement%20professionnel/C6.3%20-%20G%c3%a9rer%20son%20identit%c3%a9%20professionnelle.pdf"> C6.3 - Gérer son identité professionnelle </a> </p>
                            <p> <a className="lienPreuves" target="_blank " href="https://promo22.sio56.org/sacha/E4/Preuves/C6%20-%20Organiser%20son%20d%c3%a9veloppement%20professionnel/C6.4%20-%20D%c3%a9velopper%20son%20projet%20professionnel.pdf"> C6.4 - Développer son projet professionnel </a> </p>
                        </AccordionDetails>
                    </Accordion>
                </Grid>


            </Grid>
        </>
    )

};
export default Competences;
