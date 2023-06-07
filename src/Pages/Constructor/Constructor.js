import {React, useEffect} from "react";
import Canvas from './Canvas.js';
import Element from './Element.js';
import './Constructor.scss';

function Constructor() {
  let canvas;
  let htmlCanvas;
  let shapes = [];

  function addElement() {
    shapes.push(new Element(
      {width: 100, height: 100}, 
      {x: 80, y: 40},
      'red'
      ))
    canvas.draw_shapes(shapes);
  }

  useEffect(()=>{
    htmlCanvas = document.getElementById('canvas');
    canvas = new Canvas(htmlCanvas, {width: '70vw', height: '80vh'});
    canvas.draw_shapes(shapes);
  }, [])

  let is_mouse_in_shape = function(x, y, shape) {
    let s_left = shape.coords.x;
    let s_right = shape.coords.x + shape.area.width;
    let s_top = shape.coords.y;
    let s_bottom = shape.coords.y + shape.area.height;

    if(
      x > s_left && 
      x < s_right && 
      y > s_top && 
      y < s_bottom) 
    {
      alert("bbbb")
    }
  }

  

  let on_click = function(event){
    event.preventDefault();
    let startX = parseInt(event.clientX);
    let startY = parseInt(event.clientY);
    let index = 0;
    for(let shape of shapes) {
      is_mouse_in_shape(startX, startY, shape)
    }
  }
  
  return(
    <div style={{display: 'flex'}}>
      <canvas id="canvas" onClick={on_click}></canvas>
      <ul>
        <li onClick={()=>{addElement()}}>Диван</li>
        <li>Крісло</li>
        <li>Тумба</li>
        <li>Стіл</li>
      </ul>
    </div>
  )
}

export default Constructor;