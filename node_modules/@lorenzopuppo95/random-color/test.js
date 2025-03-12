const MIN_COLOR = 0;
const MAX_COLOR = 255;
const randomBetween = () => MIN_COLOR + Math.floor(Math.random() * (MAX_COLOR - MIN_COLOR + 1));

function rgbToHex(rgbArray) {
    const r = rgbArray[0].toString(16).padStart(2, '0');
    const g = rgbArray[1].toString(16).padStart(2, '0');
    const b = rgbArray[2].toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
}

function testMaxAndMinRandom(){
    for (let i = 0; i < 10000; i++) {
        const result = randomBetween();
        if (result >255 || result<0){
            console.log("randomrror");
        }   
    }
}

function testRgbStringLength(){
    for (let i = 0; i < 10000; i++) {
        const result = `rgb(${randomBetween()},${randomBetween()},${randomBetween()})`;
        if (result.length<10 || result.length>16){
            console.log("rgbrror");
        }
    }
}

function testHexStringLength(){
    for (let i = 0; i < 10000; i++) {
        hexString = rgbToHex([randomBetween(),randomBetween(),randomBetween()]);
        if (hexString.length!==7){
            console.log("hexrror");
        }
    }
}

function startTest(){
    testMaxAndMinRandom();
    console.log("Finished testing random numbers");
    testRgbStringLength();
    console.log("Finished testing rgb string length");
    testHexStringLength();
    console.log("Finished testing hex string length");
}

startTest();