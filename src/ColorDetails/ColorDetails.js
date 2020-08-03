import React, {useState} from "react";
import * as styles from "./ColorDetails.module.scss";
import {hexToHsl, hslToHex, hslToRgb, isValidHex} from "../colorConverter";

export const ColorDetails = ({hslColor}) => {
    const hexColor = hslToHex(hslColor);
    const rgbColor = hslToRgb(hslColor);
    
    return (
        <section>
            <h2>Details</h2>
            <div>Hex: {hexColor}</div>
            <div>RGB: {rgbColor.red}, {rgbColor.green}, {rgbColor.blue}</div>
            <div>HSV: {hslColor.hue}° {hslColor.saturation}% {hslColor.brightness}%</div>
        </section>
    );
};

const HexInput = ({hexColor, updateColor}) => {
    const [value, setValue] = useState(hexColor);
    
    const tryUpdate = event => {
        const newValue = event.target.value;
        setValue(newValue);
        
        if (isValidHex(newValue)) {
            const newColor = hexToHsl(newValue);
            updateColor(newColor);
        }
    };
    
    return (
        <div>Hex: {hexColor}</div>
    );
};