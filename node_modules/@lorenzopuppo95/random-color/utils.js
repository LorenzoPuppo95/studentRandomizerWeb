const MIN_COLOR = 0;
const MAX_COLOR = 255;
const randomBetween = () => MIN_COLOR + Math.floor(Math.random() * (MAX_COLOR - MIN_COLOR + 1));

export function randomColorArray() {
    const r = randomBetween();
    const g = randomBetween();
    const b = randomBetween();
    const rgbArray = [r, g, b];
    return rgbArray;
}

export function rgbToHex(rgbArray) {
    const r = rgbArray[0].toString(16).padStart(2, '0');
    const g = rgbArray[1].toString(16).padStart(2, '0');
    const b = rgbArray[2].toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
}