import React from "react";
import * as styles from "./HslSliders.module.scss"

export const HslSliders = ({color, setHue, setSaturation, setBrightness}) => {
    const hueBackground = {
        background: `linear-gradient(tohsl(0, ${color.saturation}%, ${color.brightness}%), hsl(180, ${color.saturation}%, ${color.brightness}%), hsl(360, ${color.saturation}%, ${color.brightness}%))`, 
    };
    
    console.log(hueBackground);
    
    return (
        <section>
            <Slider label="Hue" value={color.hue} maxValue={360} update={setHue} backgroundStyle={hueBackground}/>
            <Slider label="Saturation" value={color.saturation} maxValue={100} update={setSaturation} backgroundStyle={hueBackground}/>
            <Slider label="Brightness" value={color.brightness} maxValue={100} update={setBrightness} backgroundStyle={hueBackground}/>
        </section>
    );
};

const Slider = ({label, value, maxValue, update, backgroundStyle}) => {
    const moveSlider = event => {
        const newValue = parseInt(event.target.value);
        update(newValue);    
    };
    
    return (
        <label className={styles.slider}>
            <span className={styles.sliderLabel}>{label}</span>
            <input className={styles.sliderBar} type="range" min="0" max={maxValue} value={value} onChange={moveSlider}/>
        </label>
    );
};