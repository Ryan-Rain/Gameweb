let time     = 0;
let path     = [];
let drawing  = [];
let signal   = [];

let fourierC;
let stop = false;

const CANVAS_WIDTH = 1440;
const CANVAS_HEIGHT = 900;


const IMAGE = [
{ x: 0, y : 240 },
{ x: 4, y : 231 },
{ x: 9, y : 221 },
{ x: 12, y : 210 },
{ x: 17, y : 201 },
{ x: 23, y : 191 },
{ x: 27, y : 182 },
{ x: 31, y : 172 },
{ x: 36, y : 163 },
{ x: 42, y : 156 },
{ x: 49, y : 148 },
{ x: 57, y : 141 },
{ x: 66, y : 137 },
{ x: 75, y : 133 },
{ x: 86, y : 129 },
{ x: 97, y : 126 },
{ x: 107, y : 124 },
{ x: 117, y : 122 },
{ x: 127, y : 121 },
{ x: 138, y : 120 },
{ x: 149, y : 119 },
{ x: 160, y : 118 },
{ x: 171, y : 118 },
{ x: 182, y : 117 },
{ x: 193, y : 117 },
{ x: 205, y : 117 },
{ x: 217, y : 117 },
{ x: 228, y : 117 },
{ x: 239, y : 117 },
{ x: 250, y : 117 },
{ x: 261, y : 117 },
{ x: 272, y : 117 },
{ x: 283, y : 117 },
{ x: 294, y : 117 },
{ x: 305, y : 117 },
{ x: 316, y : 117 },
{ x: 327, y : 117 },
{ x: 338, y : 117 },
{ x: 350, y : 117 },
{ x: 363, y : 117 },
{ x: 374, y : 117 },
{ x: 385, y : 117 },
{ x: 397, y : 117 },
{ x: 409, y : 117 },
{ x: 420, y : 117 },
{ x: 431, y : 117 },
{ x: 442, y : 117 },
{ x: 453, y : 117 },
{ x: 464, y : 117 },
{ x: 472, y : 116 },
{ x: 475, y : 117 },
{ x: 477, y : 120 },
{ x: 477, y : 128 },
{ x: 477, y : 137 },
{ x: 477, y : 145 },
{ x: 477, y : 153 },
{ x: 477, y : 163 },
{ x: 476, y : 173 },
{ x: 476, y : 180 },
{ x: 476, y : 189 },
{ x: 477, y : 190 },
{ x: 474, y : 189 },
{ x: 465, y : 189 },
{ x: 455, y : 189 },
{ x: 444, y : 189 },
{ x: 434, y : 189 },
{ x: 424, y : 189 },
{ x: 414, y : 189 },
{ x: 403, y : 189 },
{ x: 393, y : 189 },
{ x: 382, y : 189 },
{ x: 372, y : 189 },
{ x: 363, y : 189 },
{ x: 364, y : 191 },
{ x: 363, y : 202 },
{ x: 363, y : 215 },
{ x: 362, y : 228 },
{ x: 362, y : 239 },
{ x: 361, y : 253 },
{ x: 360, y : 265 },
{ x: 359, y : 279 },
{ x: 357, y : 292 },
{ x: 356, y : 306 },
{ x: 355, y : 318 },
{ x: 353, y : 331 },
{ x: 352, y : 343 },
{ x: 351, y : 355 },
{ x: 350, y : 369 },
{ x: 349, y : 383 },
{ x: 348, y : 396 },
{ x: 348, y : 409 },
{ x: 349, y : 421 },
{ x: 350, y : 436 },
{ x: 351, y : 448 },
{ x: 353, y : 459 },
{ x: 358, y : 473 },
{ x: 365, y : 484 },
{ x: 374, y : 494 },
{ x: 385, y : 500 },
{ x: 400, y : 503 },
{ x: 411, y : 503 },
{ x: 423, y : 501 },
{ x: 432, y : 496 },
{ x: 442, y : 489 },
{ x: 448, y : 481 },
{ x: 455, y : 471 },
{ x: 458, y : 462 },
{ x: 461, y : 453 },
{ x: 461, y : 445 },
{ x: 461, y : 442 },
{ x: 470, y : 442 },
{ x: 479, y : 443 },
{ x: 479, y : 446 },
{ x: 479, y : 453 },
{ x: 477, y : 466 },
{ x: 475, y : 477 },
{ x: 472, y : 489 },
{ x: 468, y : 501 },
{ x: 464, y : 513 },
{ x: 459, y : 522 },
{ x: 453, y : 532 },
{ x: 446, y : 542 },
{ x: 439, y : 551 },
{ x: 431, y : 558 },
{ x: 421, y : 565 },
{ x: 411, y : 570 },
{ x: 399, y : 575 },
{ x: 387, y : 579 },
{ x: 374, y : 579 },
{ x: 361, y : 579 },
{ x: 345, y : 579 },
{ x: 333, y : 574 },
{ x: 320, y : 569 },
{ x: 310, y : 562 },
{ x: 302, y : 554 },
{ x: 295, y : 544 },
{ x: 289, y : 532 },
{ x: 282, y : 520 },
{ x: 278, y : 507 },
{ x: 277, y : 495 },
{ x: 276, y : 482 },
{ x: 276, y : 469 },
{ x: 277, y : 456 },
{ x: 278, y : 442 },
{ x: 279, y : 428 },
{ x: 280, y : 415 },
{ x: 281, y : 401 },
{ x: 282, y : 388 },
{ x: 283, y : 377 },
{ x: 283, y : 363 },
{ x: 285, y : 349 },
{ x: 286, y : 334 },
{ x: 287, y : 320 },
{ x: 289, y : 306 },
{ x: 290, y : 290 },
{ x: 292, y : 275 },
{ x: 293, y : 262 },
{ x: 294, y : 249 },
{ x: 296, y : 234 },
{ x: 297, y : 222 },
{ x: 298, y : 208 },
{ x: 297, y : 194 },
{ x: 297, y : 188 },
{ x: 286, y : 188 },
{ x: 274, y : 188 },
{ x: 261, y : 188 },
{ x: 247, y : 188 },
{ x: 234, y : 188 },
{ x: 220, y : 188 },
{ x: 207, y : 188 },
{ x: 194, y : 187 },
{ x: 193, y : 192 },
{ x: 192, y : 203 },
{ x: 192, y : 215 },
{ x: 191, y : 228 },
{ x: 190, y : 240 },
{ x: 189, y : 254 },
{ x: 187, y : 268 },
{ x: 186, y : 281 },
{ x: 185, y : 293 },
{ x: 183, y : 307 },
{ x: 182, y : 319 },
{ x: 180, y : 332 },
{ x: 179, y : 345 },
{ x: 178, y : 358 },
{ x: 177, y : 370 },
{ x: 176, y : 382 },
{ x: 175, y : 395 },
{ x: 173, y : 410 },
{ x: 171, y : 428 },
{ x: 169, y : 440 },
{ x: 167, y : 456 },
{ x: 164, y : 470 },
{ x: 161, y : 488 },
{ x: 157, y : 505 },
{ x: 150, y : 523 },
{ x: 146, y : 539 },
{ x: 138, y : 554 },
{ x: 127, y : 566 },
{ x: 117, y : 574 },
{ x: 105, y : 576 },
{ x: 91, y : 578 },
{ x: 77, y : 579 },
{ x: 65, y : 573 },
{ x: 52, y : 567 },
{ x: 43, y : 558 },
{ x: 39, y : 544 },
{ x: 37, y : 531 },
{ x: 38, y : 516 },
{ x: 44, y : 502 },
{ x: 53, y : 489 },
{ x: 62, y : 476 },
{ x: 70, y : 461 },
{ x: 78, y : 449 },
{ x: 86, y : 434 },
{ x: 93, y : 423 },
{ x: 102, y : 408 },
{ x: 109, y : 392 },
{ x: 114, y : 380 },
{ x: 121, y : 366 },
{ x: 125, y : 351 },
{ x: 128, y : 337 },
{ x: 133, y : 325 },
{ x: 135, y : 311 },
{ x: 138, y : 296 },
{ x: 139, y : 282 },
{ x: 141, y : 269 },
{ x: 144, y : 255 },
{ x: 144, y : 242 },
{ x: 145, y : 229 },
{ x: 145, y : 216 },
{ x: 146, y : 204 },
{ x: 146, y : 191 },
{ x: 138, y : 190 },
{ x: 125, y : 189 },
{ x: 109, y : 189 },
{ x: 94, y : 191 },
{ x: 80, y : 194 },
{ x: 65, y : 200 },
{ x: 52, y : 208 },
{ x: 39, y : 221 },
{ x: 28, y : 235 },
{ x: 19, y : 255 },
{ x: 11, y : 261 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
{ x: 0, y : 240 },
];


function createFourierSeries(drawing) {
    for (let i = 0; i < drawing.length; i++) {
        const re = drawing[i].x;
        const im = drawing[i].y;
        signal[i] = new Complex(re, im);
    }

    fourierC = dft2(signal);
    fourierC.sort((a, b) => b.amplitude - a.amplitude);

}


function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

    for (let i = 0; i < IMAGE.length; i++) {
        IMAGE[i].x -= CANVAS_WIDTH  / 2.0;
        IMAGE[i].y -= CANVAS_HEIGHT / 2.0;
    }

    createFourierSeries(IMAGE);
}


function drawEpicycles(x, y, rotation, fourier, samples = Infinity) {
    stroke(255, 50);
    noFill();

    samples = min(fourier.length, samples);

    for (let i = 0; i < samples; i++) {
        const x0 = x;
        const y0 = y;

        const frequency = fourier[i].frequency;
        const amplitude = fourier[i].amplitude;
        const phase = fourier[i].phase;
        
        x += amplitude * cos(frequency * time + phase + rotation);
        y += amplitude * sin(frequency * time + phase + rotation);

        // Orbital path.
        ellipse(x0, y0, amplitude * 2);

        // Line from center to point.
        line(x0, y0, x, y);
    }

    return createVector(x, y);
}

function drawPath(path, v, maxSize) {
    stroke(255);
    path.unshift(v);
    
    noFill();
    beginShape();
    for (let i = 0; i < path.length; i++) {
        const v = path[i];
        vertex(v.x, v.y);
    }
    endShape();

    while (path.length > maxSize) {
        path.pop();
    }
}


function draw() {
    background(0);
    const epiCycle1Offset = width  / 2;
    const epiCycle2Offset = height / 2;

    let count = fourierC.length;
    let v = drawEpicycles(epiCycle1Offset, epiCycle2Offset, 0, fourierC);

    drawPath(path, v, count);

    const dt = TWO_PI / count;
    time += dt;

    if (path.length === fourierC.length)
    {
        path = [];
    }
}
