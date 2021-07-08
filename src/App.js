
import 'bootstrap/dist/css/bootstrap.min.css';
import Values from "values.js";
import {useState} from "react";
import ColorInput from "./ColorInput";
import ColorList from "./ColorList"


function App() {
  const [color,setColor] = useState('');
  const [colorList , setColorList] = useState(new Values("#04009A").all()) ;
  const [error , setError] = useState(false);
    const changeColor = (colorfrominput) => {
        try {
            setError(false);
            setColorList(new Values(`#${color}`).all()) ;


        }
        catch (error) {
            setColor('');
            setColorList([]) ;
            setError(true);


        }
    }

  return (
          <>
            <ColorInput
                value={color}
                changeColor={changeColor}
                onColorChange={setColor}
                error = {error} />
            <ColorList colorList={colorList} error={error}/>
          </>

  )
};

export default App;
