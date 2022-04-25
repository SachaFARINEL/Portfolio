import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import * as React from 'react';
import { Button } from '@mui/material';
import '../styles/styles.css'


const Titre = (props) => {




    return (
        <>
            <h1 id="maPresentation" style={{ fontFamily: 'Inter', fontSize: '1.8rem', color: '#221e41' }}>{props.titre}<Button a target="_blank" href={props.url} variant="outlined" size='small' startIcon={props.icon} style={{ marginLeft: '2rem', color: '#8A6FFF', borderColor: '#8A6FFF' }}>
                {props.button}
            </Button></h1>


        </>
    )
};
export default Titre;
