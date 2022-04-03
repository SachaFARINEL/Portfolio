import * as React from 'react';
import { Button, Card, CardContent, Grid, Modal, Typography } from '@mui/material';
import '../styles/styles.css'
import { Box } from '@mui/system';

const Documentations = (props) => {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '90%',
        boxShadow: 24,

    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>

            <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center' }} >

                <div className='containerDoc' onClick={handleOpen} >
                    <div className='transitionGrowth' style={{ width: '20vh', height: '20vh', overflow: 'hidden', borderRadius: '2vh', background: props.backgroundCouleur }}>
                        <img style={{ width: '100%' }} src={props.image}></img>
                    </div>
                    <figcaption className='descriptionDoc' style={{ fontSize: '2.5vh' }}>{props.titre}</figcaption>
                </div>
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <iframe src={props.modal} width='100%' height='100%'></iframe>
                </Box>
            </Modal>


        </>
    )
};
export default Documentations;