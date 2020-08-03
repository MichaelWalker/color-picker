import React from "react";
import * as styles from "./HslSliders.module.scss"

export const HslSliders = ({color, setHue, setSaturation, setBrightness}) => {
    return (
        <section>
            <Slider label="Hue" value={color.hue} maxValue={360} setValue={setHue}/>
            <Slider label="Saturation" value={color.saturation} maxValue={100} setValue={setSaturation}/>
            <Slider label="Brightness" value={color.brightness} maxValue={100} setValue={setBrightness}/>
        </section>
    );
};

const Slider = ({label, maxValue, value, setValue}) => {
    const moveSlider = event => {
        const newValue = parseInt(event.target.value);
        setValue(newValue);    
    };
    
    return (
        <label className={styles.slider}>
            <span className={styles.sliderLabel}>{label}</span>
            <input className={styles.sliderBar} type="range" min="0" max={maxValue} value={value} onChange={moveSlider}/>
        </label>
    );
};