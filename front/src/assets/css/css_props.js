const w = (value) => `width: ${value}`.toString(); // width
const h = (value) => `height: ${value}`.toString();
const wh = (value) => `width: ${value.split(/[ -_]/)[0]}; height: ${value.split(/[ -_]/)[1]}`; // width + height
const mxw = (value) => `max-width: ${value}`.toString();
const mnw = (value) => `min-width: ${value}`.toString();

const fl = (value) => `flex-direction: ${value}`.toString();

export {w, h, wh, mxw, mnw, fl};