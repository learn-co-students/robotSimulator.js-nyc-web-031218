class Robot {
	constructor() {
    this.coordinates = [0,0];
    this.bearing = "north";
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(bearing) {
    const bearings = ['north', 'south', 'east', 'west'];
    if (bearings.includes (bearing)) {
      this.bearing = bearing;
    }
    else {
      throw new Error ("Invalid Robot Bearing");
    }
  }

  place ({x, y, direction}) {
    this.setCoordinates(x,y);
    this.setBearing(direction);
  }

  turnRight() {
    
  }
}
