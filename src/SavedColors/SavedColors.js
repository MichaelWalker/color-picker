import React from "react";
import * as styles from "./SavedColors.module.scss"

export const SavedColors = ({savedColors, removeColor}) => {
    const savedSwabs = savedColors.map(color => <SavedSwab color={color} removeColor={removeColor}/>);
    return (
        <section>
            <h2>Saved Colors</h2>
            <ul className={styles.swabList}>
                {savedSwabs}
            </ul>
        </section>
    );
};

const SavedSwab = ({color, removeColor: removeColor}) => {
    return (
        <li className={styles.savedSwab} style={{background: `hsl(${color.hue} ${color.saturation}% ${color.brightness}%`}}>
            <button className={styles.deleteButton} onClick={() => removeColor(color)}>-</button>
        </li>
    );
};