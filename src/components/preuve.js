const Preuve = (props) => {


    return (
        <>
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <iframe style={{ height: '60vh', width: '40vw' }} src={props.url}></iframe>
            </div>

        </>
    )


};
export default Preuve;