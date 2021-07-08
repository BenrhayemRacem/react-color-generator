import {Alert, Button, Col, Container, Row} from "react-bootstrap";





const ColorInput = (props)=> {
    const colorValue = props.value;
    const changeColor = props.changeColor;
    const onColorChange = props.onColorChange;
    const error = props.error;
     const inputClassName= error ? "wrongInput" : "validInput" ;

    const handleSubmit =(e) => {
        e.preventDefault();
        changeColor(colorValue);
    }

return (
    <Container  >
        {error && (
            <Row className="justify-content-center">
            <Alert variant="danger">
                <Alert.Heading>Hey, wrong Color</Alert.Heading>
                </Alert>
        </Row>
            )}

        <form  onSubmit={handleSubmit}>

            <Row  className="justify-content-center">

                <Col xs={5}>
                        <label>Enter Color &nbsp; </label>
                    <input type="text"
                           placeholder="e.g: 04009A"
                           value={colorValue}
                           onChange={(e)=>onColorChange(e.target.value)}
                    className={inputClassName}/>

                </Col>

            </Row>
            <Row   className="justify-content-center">
                <Col xs={5} className="justify-content-center">
                    <Button type="submit" size="lg"    >
                        submit
                    </Button>
                </Col>

            </Row>
        </form>


    </Container>
)
};


export default ColorInput;