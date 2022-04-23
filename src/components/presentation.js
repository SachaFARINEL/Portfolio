import { Grid } from "@mui/material";

const Presentation = (props) => {


    return (
        <>
            <Grid container justifyContent="center">
                <Grid item md={8} xs={12} style={{ fontFamily: "Lato", fontSize: "0.9rem", color: "#757384", textAlign: 'center' }}>

                    <p>Je suis Sacha, ancien animateur social en reconvertion dans le développement</p>
                    <p>Je suis activement à la recherche d'une <strong>alternance</strong> pour l'année prochaine 😎</p>


                </Grid>
            </Grid>
        </>
    )


};
export default Presentation;