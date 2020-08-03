import React from "react";
import * as styles from "./ColorDetails.module.scss";
import { hslToHex, hslToRgb } from "../colorConverter";

export const ColorDetails = ({hslColor}) => {
    const hexColor = hslToHex(hslColor);
    const rgbColor = hslToRgb(hslColor);
    
    return (
        <section>
            <h2>Details</h2>
            <div>
                <span className={styles.colorSpace}>Hex:</span>
                {hexColor}
            </div>
            <div>
                <span className={styles.colorSpace}>RGB:</span>
                {rgbColor.red}, {rgbColor.green}, {rgbColor.blue}
            </div>
            <div>
                <span className={styles.colorSpace}>HSV:</span>
                {hslColor.hue}° {hslColor.saturation}% {hslColor.brightness}%
            </div>
        </section>
    );
};