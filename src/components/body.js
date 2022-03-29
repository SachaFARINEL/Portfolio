import { Button, Card, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';


const Body = ({ mesInformations }) => {

  const handleClick = (e) => {

  }

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: '100vh', background: "rgba(196,194,205,255)" }}
      >
        <Grid
          item
          xs={2}
          style={{ background: '#0f0b32', height: '90vh', borderRadius: '5vh 0 0 5vh' }}>

        </Grid>

        <Grid
          item
          xs={5}
          style={{ height: '90vh' }}
        >
          <Grid
            container
            direction="column"
          >
            <Grid item style={{ height: '3vh', background: 'rgba(41,38,79,255)', border: '1px solid rgb(178,175,192, 0.2)', borderBottom: 'none', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <p>aboutMe.js - Portfolio - FARINEL Sacha</p>
            </Grid>

            <Grid
              item
              style={{ background: '#0f0b32', height: '7vh', border: '1px solid rgb(178,175,192, 0.2)', borderBottom: 'none' }}>

              <Grid
                container
              >
                <Grid
                  item
                  xs={3}
                  style={{ color: 'grey', height: '7vh', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '5px solid #0f0b32' }}>
                  <InsertDriveFileOutlinedIcon style={{ marginTop: 7 }} /><span style={{ marginTop: 5, marginLeft: 7 }}>styles.css</span>
                </Grid>

                <Grid
                  item
                  xs={3}
                  style={{ color: 'white', height: '7vh', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '5px solid rgba(71,48,197,255)' }}>
                  <InsertDriveFileOutlinedIcon style={{ marginTop: 7 }} /><span style={{ marginTop: 5, marginLeft: 7 }}>aboutMe.js</span>
                </Grid>

              </Grid>
            </Grid>

            <Grid
              item
              style={{ background: '#1b193d', height: '70vh', border: '1px solid rgb(178,175,192, 0.2)', borderTop: 'none' }}
            >
              <div style={{ background: 'rgba(41,38,79,255)', margin: 25, padding: 12, color: 'white', borderRadius: '1vh', display: 'flex', justifyContent: 'center' }}> <GppMaybeOutlinedIcon /><span style={{ marginLeft: 8 }}>La modification est désactivée. Vous êtes en lecture seule.</span></div>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 20 }}>1</span> <span style={{ color: '#C783B7' }}>const</span> <span style={{ color: '#82AAFF', fontStyle: 'italic' }}>AboutMe</span> <span style={{ color: '#C783B7' }}>=</span> <span style={{ color: '#FFD70D' }}>(</span><span style={{ color: '#C783B7' }}>&#x0007B; <span style={{ color: 'white' }}>mesInformations</span> &#x0007D;</span><span style={{ color: '#FFD70D' }}>)</span> <span style={{ color: '#C783B7' }}>=&gt;</span> <span style={{ color: '#FFD70D' }}>&#x0007B;</span></p>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 20 }}>2</span></p>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 50 }}>3</span> <span style={{ color: '#C783B7' }}>const</span> <span style={{ color: '#82AAFF', fontStyle: 'italic' }}>handleClick</span> <span style={{ color: '#C783B7' }}>= (<span style={{ color: 'grey' }}>e</span>) = &gt; &#x0007B;</span></p>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 80 }}>4</span> <span style={{ color: '#3ECCCA', fontStyle: 'italic' }}>console<span style={{ color: '#C783B7' }}>.</span><span style={{ color: '#82AAFF', fontStyle: 'italic' }}>log</span><span style={{ fontStyle: 'normal' }}><span style={{ color: '#DA70B4' }}>(</span><span style={{ color: 'white' }}>mesInformations</span></span></span><span style={{ color: '#DA70B4' }}>)</span></p>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 60 }}>5</span><span style={{ color: '#C783B7' }}>&#x0007D;</span></p>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 30 }}>6</span></p>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 60 }}>7</span><span style={{ color: '#C783B7' }}>return &#x00028;</span></p>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 80 }}>8</span><span style={{ color: '#7FDBCA' }}>&lt;&gt;</span></p>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 30 }}>9</span></p>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 70 }}>10</span><span style={{ color: '#7FDBCA' }}>&lt;/&gt;</span></p>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 55 }}>11</span><span style={{ color: '#C783B7' }}>&#x00029;</span><span style={{ color: 'white' }}>;</span></p>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 30 }}>12</span><span style={{ color: '#FFD70D' }}>&#x0007D;</span></p>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 30 }}>13</span></p>

              <p style={{ fontFamily: 'Red Hat Mono, Monospace' }}><span style={{ color: 'grey', marginLeft: 40, marginRight: 30 }}>14</span><span style={{ color: '#C783B7', fontStyle: 'italic' }}>export default <span style={{ fontStyle: 'normal', color: 'white' }}>AboutMe;</span></span></p>

            </Grid>

            <Grid
              item
              style={{ background: '#1b193d', color: 'grey', height: '10vh', border: '1px solid rgb(178,175,192, 0.2)', borderTop: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ marginLeft: 30 }}><FileCopyOutlinedIcon style={{ margin: '0px 10px 0px 10px' }} /> <AssignmentOutlinedIcon style={{ margin: '0px 10px 0px 10px' }} /> <CachedOutlinedIcon style={{ margin: '0px 10px 0px 10px' }} /></div><div style={{ marginRight: 30 }}><Button style={{ background: 'rgba(71,48,197,255)', padding: '1vh 2vw 1vh 2vw' }} variant="contained">Run</Button> </div>
            </Grid>

          </Grid>

        </Grid>
        <Grid
          item
          xs={3}
          style={{ background: '#0f0b32', height: '90vh', borderRadius: '0 5vh 5vh 0' }}>
        </Grid>

      </Grid>

    </>
  )
};
export default Body;