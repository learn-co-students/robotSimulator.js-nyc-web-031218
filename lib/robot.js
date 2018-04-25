class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0,0]
    this.bearing = "north"
  }

  setCoordinates(x,y) {
    this.coordinates[0] = x
    this.coordinates[1] = y
  }

  setBearing(direction) {
    if (["north", "south", "east", "west"].includes(direction)) {
      return this.bearing = direction
    } else {
      throw Error('Invalid Robot Bearing')
    }
  }

  place(parameters) {
    this.coordinates[0] = parameters.x
    this.coordinates[1] = parameters.y
    this.setBearing(parameters.direction)
  }

  turnRight() {
    if (this.bearing === "north") {
      this.bearing = "east"
    } else if (this.bearing === "east") {
      this.bearing = "south"
    } else if (this.bearing === "south") {
      this.bearing = "west"
    } else if (this.bearing === "west") {
      this.bearing = "north"
    }
  }

  turnLeft() {
    if (this.bearing === "north") {
      this.bearing = "west"
    } else if (this.bearing === "east") {
      this.bearing = "north"
    } else if (this.bearing === "south") {
      this.bearing = "east"
    } else if (this.bearing === "west") {

      this.bearing = "south"
    }
  }

  advance() {
    if (this.bearing === "north") {
      this.coordinates[1] += 1
    } else if (this.bearing === "east") {
      this.coordinates[0] += 1
    } else if (this.bearing === "south") {
      this.coordinates[1] -= 1
    } else if (this.bearing === "west") {
      this.coordinates[0] -= 1
    }
  }

  translateInstructions(string){
     let newArray = string.split('');
      for (const letter of newArray) {
        if (letter === "L" ) {
          this.turnLeft();
        } else if (letter === "R") {
          this.turnRight();
        } else if (letter === "A") {
          this.advance();
        }
      }
  }

}
