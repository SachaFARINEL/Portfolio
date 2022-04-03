import * as React from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import '../styles/styles.css'

const Documentations = () => {
    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item xs={2} >
                    <div className='divProjets' style={{ width: '20vh', height: '20vh', overflow: 'hidden', borderRadius: '2vh', background: '#E1DBFF' }}>
                        <img style={{ width: '100%' }} src='assets/nas3.svg'></img>
                    </div>
                </Grid>

                <Grid item xs={2} >
                    <div className='divProjets' style={{ width: '20vh', height: '20vh', overflow: 'hidden', borderRadius: '2vh', background: '#FDE7E9' }}>
                        <img style={{ width: '100%' }} src='assets/cloud3.svg'></img>
                    </div>

                </Grid>

                <Grid item xs={2} >
                    <div className='divProjets' style={{ width: '20vh', height: '20vh', overflow: 'hidden', borderRadius: '2vh', background: '#CCF2FF' }}>
                        <img style={{ width: '100%' }} src='assets/mitm3.svg'></img>
                    </div>
                </Grid>

            </Grid>

        </>
    )
};
export default Documentations;