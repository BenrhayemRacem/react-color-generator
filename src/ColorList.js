import {Alert, Container, Row} from "react-bootstrap";
import SingleColor from "./SingleColor";
import {useEffect, useState} from "react";

const ColorList = (props)=> {
const colorList = props.colorList;
const  error = props.error;
 const [alertCopy , setAlertCopy] = useState(false);
    useEffect( ()=>{

            let timeout = setTimeout ( ()=> setAlertCopy(false),3000);

            return ()=> clearTimeout(timeout)

    } , [ alertCopy])
    return (
        <Container>
            {!error && (
                <>
                    {alertCopy && (
                        <Row className="justify-content-center">
                        <Alert variant="success">
                        <Alert.Heading>color copied successfully</Alert.Heading>
                    </Alert>
                        </Row>)}
                    {!alertCopy && (<Row className=" justify-content-center">

                        <Alert variant="warning">
                            <Alert.Heading>Click on color to copy it to clipboard</Alert.Heading>
                        </Alert>

                    </Row>)}

                <Row>
                {colorList.map((color , colorIndex)=> {
                    return <SingleColor
                        key={colorIndex}
                        color={color}
                        oppositeColor={colorList[colorIndex].rgb}
                    alertCopy={ ()=>setAlertCopy(true)}/>
                })}
            </Row>

                </>

            )}

        </Container>
        )




};

export default ColorList;