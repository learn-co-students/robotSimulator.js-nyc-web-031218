class Robot {
	//your solution here
  constructor(array = [0,0], bearing = 'north'){
    this.coordinates = array
    this.bearing = bearing
  }

  setCoordinates(x, y){
    this.coordinates = [x,y]
  }

  setBearing(direction){
    const directions = ["north", "south", "east", "west"];
    if(directions.includes(direction)){
      this.bearing = direction
    } else {
      throw 'Invalid Robot Bearing'
    }
  }

  place(obj){
    this.coordinates = [obj.x, obj.y]
    this.bearing = obj.direction
  }

    turnRight(){
      let facing = this.bearing
      switch (facing) {
        case 'north':
          this.bearing = 'east'
          break;
          case 'south':
          this.bearing = 'west'
          break;
          case 'east':
          this.bearing = 'south'
          break;
          case 'west':
          this.bearing = 'north'
          break;
        }
}

  turnLeft(){
    let facing = this.bearing
    switch (facing) {
      case 'north':
        this.bearing = 'west'
        break;
        case 'south':
        this.bearing = 'east'
        break;
        case 'east':
        this.bearing = 'north'
        break;
        case 'west':
        this.bearing = 'south'
        break;
      }
    }

  advance(){
    let facing = this.bearing
    let x = this.coordinates[0]
    let y = this.coordinates[1]

    switch (facing) {
      case 'north':
        this.coordinates = [x, y +1]
        break;
        case 'south':
        this.coordinates = [x, y -1]
        break;
        case 'east':
        this.coordinates = [x+1, y ]
        break;
        case 'west':
        this.coordinates = [x-1, y]
        break;
      }
    }

    translateInstructions(instructions){
      let instruction = instructions.split('')
      instruction.forEach(letter =>{
        this.helper(letter)
      })
    }

    helper(letter){
      switch (letter) {
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

}
