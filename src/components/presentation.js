import { Grid } from "@mui/material";

const Presentation = (props) => {


    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={8} style={{ fontFamily: "Lato", fontSize: "1vw", color: "#757384", textAlign: 'center' }}>

                    <p>Je suis Sacha, ancien animateur social en reconvertion dans le développement</p>
                    <p>Je suis activement à la recherche d'une <strong>alternance</strong> pour l'année prochaine 😎</p>


                </Grid>
            </Grid>
        </>
    )


};
export default Presentation;