class Robot {
	constructor() {
    this.coordinates = [0,0]
    this.bearing = "North"
  }

  setCoordinates(coords0, coords1) {
    this.coordinates[0] = coords0
    this.coordinates[1] = coords1
  }

  setBearing(bearing) {
    const directions = ["north", "south", "east", "west"]
    const bearValid = directions.includes(bearing.toLowerCase())
    if(bearValid){
      this.bearing = bearing
    }
    else {
      throw "Invalid Robot Bearing"
    }
  }

  place(object) {
    this.coordinates[0] = object["x"]
    this.coordinates[1] = object["y"]
    this.bearing = object["direction"]
  }

  turnRight(){
    const direction = {
      north: "east",
      east: "south",
      south: "west",
      west: "north"
    }

    const currentBearing = this.bearing.toLowerCase()
    this.bearing = direction[currentBearing]
  }

  turnLeft(){
    const direction = {
      north: "west",
      west: "south",
      south: "east",
      east: "north"
    }

    const currentBearing = this.bearing.toLowerCase()
    this.bearing = direction[currentBearing]
  }

  advance() {
    const currentBearing = this.bearing.toLowerCase()
    const coords = this.coordinates

    const direction = {
      north: [0, 1],
      west: [-1, 0],
      south: [0, -1],
      east: [1, 0]
    }

    this.coordinates = direction[currentBearing].map((coord, index) => coord + coords[index])
  }

  translateInstructions(instruction) {
    const orders = {
      l: this.turnLeft(),
      r: this.turnRight(),
      a: this.advance()
    }

    const arr = instruction.split("")
    for(let element of arr){
        orders[element.toLowerCase()]
        console.log(orders[element.toLowerCase()])
    }
  }
}
