import * as React from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import '../styles/styles.css'

const Documentations = () => {
    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center' }} >

                    <div className='containerDoc' >
                        <div className='transitionGrowth' style={{ width: '20vh', height: '20vh', overflow: 'hidden', borderRadius: '2vh', background: '#E1DBFF' }}>
                            <img style={{ width: '100%' }} src='assets/nas3.svg'></img>
                        </div>
                        <figcaption className='descriptionDoc' style={{ fontSize: '' }}>Configuration d'un NAS</figcaption>
                    </div>
                </Grid>

                <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center' }} >

                    <div className='containerDoc' onClick={() => console.log('test')} >
                        <div className='transitionGrowth' style={{ width: '20vh', height: '20vh', overflow: 'hidden', borderRadius: '2vh', background: '#FDE7E9' }}>
                            <img style={{ width: '100%' }} src='assets/cloud3.svg'></img>
                        </div>
                        <figcaption className='descriptionDoc' style={{ fontSize: '' }}>Installation de Nextcloud</figcaption>
                    </div>

                </Grid>

                <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='containerDoc' >
                        <div className='transitionGrowth' style={{ width: '20vh', height: '20vh', overflow: 'hidden', borderRadius: '2vh', background: '#CCF2FF' }}>
                            <img style={{ width: '100%' }} src='assets/mitm3.svg'></img>
                        </div>
                        <figcaption className='descriptionDoc'>Les attaques Man In The Middle</figcaption>
                    </div>

                </Grid>

            </Grid>

        </>
    )
};
export default Documentations;