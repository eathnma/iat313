// // MIT License

// // Copyright (c) 2020 Russell Goldenberg
// // Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// // The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

"use strict";

const io = require("intersection-observer");
const scrollama = require("scrollama");

// instantiate the scrollama
const scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
    // response = { element, direction, index }
    console.log(response);
    // add to color to current step
    response.element.classList.add("is-active");
  }

function handleStepExit(response) {
    // response = { element, direction, index }
    console.log(response);
    // remove color from current step
    response.element.classList.remove("is-active");
}

function init() {
    // set random padding for different step heights (not required)
    step.forEach(function(step) {
    var v = 100 + Math.floor((Math.random() * window.innerHeight) / 4);
    step.style.padding = v + "px 0px";
    });
// setup the instance, pass callback functions
scroller
  .setup({
    step: ".step",
    debug: true,
    offset: 0.5
  })
  .onStepEnter((response) => {
    // { element, index, direction }
    console.log("entered");
  })
  .onStepExit((response) => {
    // { element, index, direction }
    console.log("exited");
  });

// setup resize event
window.addEventListener("resize", scroller.resize);
}
