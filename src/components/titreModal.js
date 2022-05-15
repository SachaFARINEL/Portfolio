import * as React from 'react';
import { Button, Modal } from '@mui/material';
import '../styles/styles.css'
import { Box } from '@mui/system';

const TitreModal = (props) => {

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
            <h1 id={props.id} style={{ fontFamily: 'Inter', fontSize: '1.8rem', color: '#221e41' }}>{props.titre}<Button onClick={handleOpen} variant="outlined" size='small' startIcon={props.icon} style={{ marginLeft: '2rem', color: '#8A6FFF', borderColor: '#8A6FFF' }}>
                {props.button}
            </Button></h1>

            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <iframe src={props.url} width='100%' height='100%'></iframe>
                </Box>
            </Modal>
        </>
    )
};
export default TitreModal;
