import * as convert from "color-convert";

export const rgbToHex = rgbColor => {
    const hex = convert.rgb.hex(rgbColor.red, rgbColor.green, rgbColor.blue);
    return `#${hex}`;
};

export const rgbToHsl = rgbColor => {
    const [hue, saturation, brightness] = convert.rgb.hsl(rgbColor.red, rgbColor.green, rgbColor.blue);
    return {
        hue,
        saturation, 
        brightness
    }
};

export const hexToRgb = hexColor => {
    if (hexColor[0] === '#') {
        hexColor = hexColor.substr(1);
    }
    
    const [red, green, blue] = convert.hex.rgb(hexColor);
    return {
        red,
        green,
        blue,
    }
};

export const hexToHsl = hexColor => {
    
    const rgbColor = hexToRgb(hexColor);
    return rgbToHsl(rgbColor);
};

export const hslToRgb = hslColor => {
    console.log(hslColor);
    const [red, green, blue] = convert.hsl.rgb(hslColor.hue, hslColor.saturation, hslColor.brightness);
    console.log(red, green, blue);
    return {
        red,
        green,
        blue,
    }
};

export const hslToHex = hslColor => {
    const rgbColor = hslToRgb(hslColor);
    return rgbToHex(rgbColor);
};

export const isValidRgb = rgbColor => {
    return true;
};

export const isValidHex = hexColor => {
    const hexPattern = /#?[0-9A-Fa-f]{6}/;
    return hexPattern.test(hexColor);
};

export const isValidHsl = hslColor => {
    return true;
};