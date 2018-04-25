class Robot {

  constructor(coordinates = [0, 0], bearing = 'north') {
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(coordinate1, coordinate2) {
    this.coordinates = [coordinate1, coordinate2]
  }

  setBearing(bearing) {
    const directions = ["north", "south", "east", "west"]

    if (directions.indexOf(bearing) > -1) {
      this.bearing = bearing
    } else {
      throw Error("Invalid Robot Bearing")
    }
  }

  place(object) {
    this.coordinates = [object.x, object.y]
    this.bearing = object.direction
  }

  turnRight() {
    const directions = ["north", "east", "south", "west"]

    let newBearing = directions.indexOf(this.bearing) + 1

    if (newBearing === 4) {
      this.bearing = "north"
    } else {
      this.bearing = directions[newBearing]
    }
  }

  turnLeft() {
    const directions = ["north", "east", "south", "west"]

    let newBearing = directions.indexOf(this.bearing) - 1

    if (newBearing === -1) {
      this.bearing = "west"
    } else {
      this.bearing = directions[newBearing]
    }
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1]++
        break;
      case 'east':
        this.coordinates[0]++
        break;
      case 'south':
        this.coordinates[1]--
        break;
      case 'west':
        this.coordinates[0]--
        break;
    }
  }

  translateInstructions(instruction) {
    let list = instruction.split("")

    for(const direction of list) {
      if (direction === 'R') {
        this.turnRight()
      } else if (direction === 'A') {
        this.advance()
      } else if (direction === 'L') {
        this.turnLeft()
      }
    }

    return this.coordinates
  }

}
