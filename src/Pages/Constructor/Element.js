
export default class Element {
  constructor(area, coords, color) {
    this.area = area;
    this.coords = coords;
    this.color = color;


    console.log("created "+ this.shape)
  }

  sh() {
    console.log(this.shape);
  }

}