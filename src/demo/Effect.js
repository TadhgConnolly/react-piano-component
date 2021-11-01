/* eslint-disable no-restricted-syntax */
import React from 'react';
import Sketch from 'react-p5';

function Effect() {
  const width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
  const height = window.innerHeight ||
                 document.documentElement.clientHeight ||
                document.body.clientHeight;
  const bubbles = [];

  const setup = (p5, canvasParentRef) => {
    p5.noStroke();
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.background(0, 0, 0);
  };

  const draw = (p5) => {
    for (const bubble of bubbles) {
      if (bubble.startFade === true) {
        p5.background(0, 0, 0);
        if (bubble.fade > 0) {
          bubble.fade -= 20;
        } else if (bubble.fade <= 0) {
          bubble.fade = 0;
        }
      }
      if (bubble.radius < 100) {
        bubble.radius += 10;
      } else bubble.radius += 3;


      p5.fill(p5.color(bubble.red, bubble.green, bubble.blue, bubble.fade));

      p5.ellipse(bubble.x, bubble.y, bubble.radius);
      p5.noStroke();
      for (let i = 0; i < 10; i += 1) {
        p5.ellipse(bubble.x, bubble.y, (bubble.radius / 4), bubble.radius);
        p5.rotate(Math.PI / 5);
      }
    }
    if (bubbles.length > 4) {
      bubbles.shift();
    }
  };
  class Bubble {
    constructor(x, y, radius, red, green, blue, keyCode, startFade) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.fade = 127;
      this.red = red;
      this.green = green;
      this.blue = blue;
      this.startFade = startFade;
      this.keyCode = keyCode;
    }
  }

  // eslint-disable-next-line consistent-return
  const onKeyPressed = (e) => {
    if (e.keyCode === 79 || e.keyCode === 73 || e.keyCode === 52 || e.keyCode === 70) {
      return;
    }
    if ((e.keyCode >= 50 && e.keyCode <= 55) ||
        (e.keyCode >= 77 && e.keyCode <= 90) ||
        (e.keyCode >= 66 && e.keyCode <= 74) ||
        e.keyCode === 188) {
      const red = Math.round(Math.random() * 255);
      const green = Math.round(Math.random() * 255);
      const blue = Math.round(Math.random() * 255);
      const bubble = new Bubble(Math.round((Math.random() * (width - 100)) + 100),
        Math.round((Math.random() * (height - 100)) + 100),
        2, red, green, blue, e.keyCode, false);
      bubbles.push(bubble);
    }
  };

  const onKeyUp = (e) => {
    for (const bubble of bubbles) {
      if (bubble.keyCode === e.keyCode) {
        bubble.startFade = true;
      }
    }
  };

  return <Sketch setup={setup}
    draw={draw}
    keyPressed={onKeyPressed}
    keyReleased={onKeyUp}
  />;
}

export default Effect;
