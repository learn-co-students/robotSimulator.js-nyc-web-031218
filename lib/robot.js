class Robot {
	//your solution here
  constructor(coordinates = [0,0], bearing = "north") {
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(a, b) {
    this.coordinates = [a, b]
  }
  setBearing(bearing) {
    const directions = ["north", "south", "east", "west"]
   if (directions.includes(bearing)) {
     this.bearing = bearing
   } else {
    throw "Invalid Robot Bearing"
   }
  }
  place (object) {
    this.setCoordinates(object.x, object.y),
    this.setBearing(object.direction)
  }

  turnRight() {
    switch (this.bearing) {
      case "north":
       this.setBearing("east")
       break;
       case "east":
       this.setBearing("south")
       break;

       case "west":
       this.setBearing("north")
       break;

       case "south":
       this.setBearing("west")
        break;
    }
}

turnLeft() {
  switch (this.bearing) {
    case "north":
     this.setBearing("west")
     break;
     case "east":
     this.setBearing("north")
     break;

     case "west":
     this.setBearing("south")
     break;

     case "south":
     this.setBearing("east")
      break;
  }
}

advance() {
  switch (this.bearing) {
    case "north":
     this.coordinates[1]++
     break;
     case "east":
     this.coordinates[0]++
     break;

     case "west":
     this.coordinates[0]--
     break;

     case "south":
     this.coordinates[1]--
      break;
  }
}
 translateInstructions(instructions){
  let array = instructions.split('')

  let interpreter = (instruction) => {
   switch (instruction) {
     case "L":
     this.turnLeft()
     break;
     case "R":
     this.turnRight()
     break;
     case "A":
     this.advance()
     break;
   }
 }
   for(let i=0; i < array.length; i++) {
     interpreter(array[i])
   }

  }
}
