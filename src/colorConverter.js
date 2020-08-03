import * as convert from "color-convert";

export const hslToRgb = hslColor => {
    const [red, green, blue] = convert.hsl.rgb(hslColor.hue, hslColor.saturation, hslColor.brightness);
    return {
        red,
        green,
        blue,
    }
};

export const hslToHex = hslColor => {
    const hex = convert.hsl.hex(hslColor.hue, hslColor.saturation, hslColor.brightness);
    return `#${hex}`;
};