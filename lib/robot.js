class Robot {
  //your solution here
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";
  }

  setCoordinates(x, y) {
    this.coordinates[0] = x;
    this.coordinates[1] = y;
  }

  setBearing(orientation) {
    if (["north", "south", "east", "west"].includes(orientation))
      this.bearing = orientation;
    else {
      throw "Invalid Robot Bearing"
    }
  }

  place(place) {
    this.coordinates[0] = place["x"];
    this.coordinates[1] = place["y"];
    this.bearing = place["direction"];
  }

  turnRight() {
    let x = ["north", "east", "south", "west"]
    let current = x.indexOf(this.bearing)
    this.bearing = x[(current + 1) % 4]
    return this.bearing;
  }

  turnLeft() {
    let x = ["north", "east", "south", "west"]
    let current = x.indexOf(this.bearing)
    // let newIndex = ((current - 1) % 4) < 0 ? 3 : (current - 1 % 4);
    this.bearing = x[(((current -1) % 4) + 4) % 4]
    // this.bearing = x[newIndex];
    return this.bearing;
  }

  advance() {
    if (this.bearing == "north") {
      this.coordinates[1] += 1;
    } else if (this.bearing == "south") {
      this.coordinates[1] -= 1;
    } else if (this.bearing == "east") {
      this.coordinates[0] += 1;
    } else if (this.bearing == "west") {
      this.coordinates[0] -= 1;
    } else {
      console.log("ogeez im not good at computers how did i get here")
    }
  }

  translateInstructions (instructions){
    for (const instruction of instructions){
      switch (instruction){
        case "A":
          this.advance()
          break
        case "L":
          this.turnLeft()
          break
        case "R":
          this.turnRight()
          break
        default:
          console.log("Master, why have you forsaken me.")
          break

      }
    }
  }

}
