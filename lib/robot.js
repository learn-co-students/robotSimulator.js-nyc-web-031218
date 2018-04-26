// let bearing = 'north'
// let coordinates = [0,0]


class Robot {
	constructor() {
    this.coordinates = [0, 0];
    this.bearing = 'north';
  }

  setCoordinates(num1,num2) {this.coordinates = [num1, num2]}

  setBearing(direction) {
  const directions = ["north", "east", "south", "west"];
    if (directions.includes(direction)) {
      this.bearing = direction
    }else{
      throw "Invalid Robot Bearing";
    }
  }

  place(robobj) {
     this.setCoordinates(robobj["x"],robobj["y"])
     this.setBearing(robobj["direction"])
  }

  turnRight() {
    if (this.bearing === "north") {
    this.setBearing("east");
  }else if (this.bearing === "east") {
    this.setBearing("south");
  }else if (this.bearing === "south") {
    this.setBearing("west");
  }else if (this.bearing === "west") {
    this.setBearing("north");
  }
  }
};
