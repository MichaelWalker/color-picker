import React, {useState} from 'react';
import {ColorDetails} from "./ColorDetails/ColorDetails";
import {ColorSwab} from "./ColorSwab/ColorSwab";
import {SavedColors} from "./SavedColors/SavedColors";
import {HslSliders} from "./HslSliders/HslSliders";
import * as styles from "./App.module.scss";

function App() {
    const [hue, setHue] = useState(0);
    const [saturation, setSaturation] = useState(100);
    const [brightness, setBrightness] = useState(   50);
    const [savedColors, setSavedColors] = useState([]);
    
    const color = {
        hue, saturation, brightness
    };
    
    const addSavedColor = color => {
        setSavedColors(savedColors.concat(color)); 
    };
    
    const removeSavedColor = color => {
        setSavedColors(savedColors.filter(savedColor => savedColor !== color));  
    };
    
    const setColor = color => {
        setHue(color.hue);
        setSaturation(color.saturation);
        setBrightness(color.brightness);
    };
    
    return (
        <main className={styles.main}>
            <h1>Color Picker</h1>
            <ColorSwab color={color} saveColor={addSavedColor}/>
            <HslSliders hue={hue} color={color} setHue={setHue} setSaturation={setSaturation} setBrightness={setBrightness}/>
            <ColorDetails hslColor={color} updateColor={setColor}/>
            <SavedColors savedColors={savedColors} removeColor={removeSavedColor}/>
        </main>
    );
}

export default App;
