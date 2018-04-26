class Robot {
	constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
  };

  setCoordinates(x,y) {
    this.coordinates = [x,y]
  };

  setBearing(bearing) {
  let direction = ['north', 'south', 'east', 'west']
    if (direction.includes(bearing)){
      this.bearing = bearing
    } else {
      throw "Invalid Robot Bearing"
    }
  };

  place(input){
    this.setCoordinates(input.x, input.y)
    this.setBearing(input.direction)
  }

  turnRight(){
    switch(this.bearing) {
      case "north":
        this.setBearing("east")
        break;
      case "east":
        this.setBearing("south")
        break;
      case "south":
        this.setBearing("west")
        break;
      case "west":
        this.setBearing("north")
        break;
    }
  };

  turnLeft(){
    switch(this.bearing) {
      case "north":
        this.setBearing("west")
        break;
      case "west":
        this.setBearing("south")
        break;
      case "south":
        this.setBearing("east")
        break;
      case "east":
        this.setBearing("north")
        break;
    }
  };

  advance(){
    switch(this.bearing){
      case 'north':
        ++this.coordinates[1]
        break;
      case 'east':
        ++this.coordinates[0]
        break;
      case 'south':
        --this.coordinates[1]
        break;
      case 'west':
        --this.coordinates[0]
        break;
    }
  }

    translateInstructions(instructions){
      let instruction = instructions.split('')
      instruction.forEach((element) => {
      switch(element){
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
  })
 }
}
