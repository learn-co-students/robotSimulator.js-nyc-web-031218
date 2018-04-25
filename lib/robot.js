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

  turnRight(direction) {
    if (this.bearing === "north") {
			this.setBearing("east")
		}
		else if (this.bearing === "east") {
			this.setBearing("south")
		}
		else if (this.bearing === "south") {
			this.setBearing("west")
		}
		else if (this.bearing === "west") {
			this.setBearing("north")
		}
		else {
			throw new Error ("Invalid direction")
		}
  }

	turnLeft(direction) {
    if (this.bearing === "north") {
			this.setBearing("west")
		}
		else if (this.bearing === "east") {
			this.setBearing("north")
		}
		else if (this.bearing === "south") {
			this.setBearing("east")
		}
		else if (this.bearing === "west") {
			this.setBearing("south")
		}
		else {
			throw new Error ("Invalid direction")
		}
  }

	advance() {
		if (this.bearing === "north") {
			this.coordinates = [this.coordinates[0], (this.coordinates[1] + 1)]
		}
		else if (this.bearing === "south") {
			this.coordinates = [this.coordinates[0], (this.coordinates[1] - 1)]
		}
		else if (this.bearing === "east") {
			this.coordinates = [(this.coordinates[0]+1), this.coordinates[1]]
		}
		else if (this.bearing === "west") {
			this.coordinates = [(this.coordinates[0]-1), this.coordinates[1]]
		}
	}
}
