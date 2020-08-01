import React from "react";
import * as styles from "./ColorSwab.module.scss"

export const ColorSwab = ({color, saveColor}) => {
    return (
        <section>
            <div className={styles.swab} style={{background: `hsl(${color.hue} ${color.saturation}% ${color.brightness}%`}}>
                <button onClick={() => saveColor(color)}>Save</button>
            </div>
        </section>
    );
};