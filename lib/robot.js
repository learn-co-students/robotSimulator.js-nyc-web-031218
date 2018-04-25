class Robot {
	//your solution here
  constructor(x = 0, y = 0, bearing = "north") {
    // this.x = x
    // this.y = y
    this.coordinates = [x, y]
    this.bearing = bearing
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(bearing) {
    const directions = ["north", "south", "west", "east"]

    if (directions.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw("Invalid Robot Bearing")
    }
  }

  place(args) {
    this.setCoordinates(args.x, args.y)
    this.setBearing(args.direction)
  }

  turnRight(){
    switch (this.bearing) {
      case 'north':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'west':
        this.bearing = 'north'
        break;
      case 'south':
        this.bearing = 'west'
        break;
    }
  }

  turnLeft(){
    switch (this.bearing) {
      case 'north':
        this.bearing = 'west'
        break;
      case 'east':
        this.bearing = 'north'
        break;
      case 'west':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'east'
        break;
    }
  }

  advance(){
    switch (this.bearing) {
      case 'north':
        ++this.coordinates[1]
        break;
      case 'east':
        ++this.coordinates[0]
        break;
      case 'west':
        --this.coordinates[0]
        break;
      case 'south':
        --this.coordinates[1]
        break;
    }
  }

  execChar(char){
    switch (char) {
      case 'L':
        this.turnLeft()
        break;
      case 'R':
        this.turnRight()
        break;
      case 'A':
        this.advance()
        break;
    }
  }

  translateInstructions(inst){
    for (var i = 0; i < inst.length; i++) {
      this.execChar(inst.charAt(i))
    }
  }




}
