export default class Canvas {
  constructor(canvas, area){
    this.canvas = canvas;
    this.area = area;

    this.c = canvas.getContext('2d');
    canvas.style.width = '70vw';
    canvas.style.height = '80vh';
    canvas.style.border = '5px solid red';
  }

  draw_shapes(shapes) {
    this.c.clearRect(0, 0, this.area.width, this.area.height);
    for (let shape of shapes) {
      this.c.fillStyle = shape.color;
      this.c.fillRect(
        shape.coords.x, 
        shape.coords.y, 
        shape.area.width, 
        shape.area.height);
    }
  }

}