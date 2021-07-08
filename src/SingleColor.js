import {Col} from "react-bootstrap";
import {useEffect, useState} from "react";


const SingleColor =(props) => {
    const [isShown , setIsShown] = useState(false);
    const [leave, setLeave] = useState(false);
    const color = props.color ;
   const colorHexString = color.hexString();
   const oppositeColorRgb = props.oppositeColor.map((element)=> 255-element);
    const textColor = "rgb(" + oppositeColorRgb.join(",") + ")" ;
    const alertCopy = props.alertCopy;

    useEffect( ()=>{
        if(leave) {
        let timeout = setTimeout ( ()=> setIsShown(false),500);
        return ()=> clearTimeout(timeout)
        }
    } , [isShown ])
    return (
        <Col xs={6}
             md={3}
             style={{backgroundColor:colorHexString , color:textColor}}
             onClick={()=> {
                 alertCopy();
                 navigator.clipboard.writeText(colorHexString) ;

             }}
              onMouseEnter={()=> {
                  setIsShown(true);}}
            onMouseLeave={()=>{
                setIsShown(false);
            setLeave(true)}}
             className="singleColor"
            >
            <h3> {colorHexString}</h3>
            {isShown && (<>

                <h5>{color.rgbString()}</h5>
                <h5>weight : {color.weight} % </h5>
            </>)}




        </Col>
    )
}

export default SingleColor ;