class Robot {
  constructor(){
    this.coordinates = [0,0]
    this.bearing = "north"
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(direction) {
    const validBearing = ["north", "south", "east", "west"]
    if (direction && validBearing.includes(direction.toLowerCase())) {
      this.bearing = direction
    }
    else {
      throw "Invalid Robot Bearing"
    }
  }

  place(obj) {
    this.setCoordinates(obj.x, obj.y)
    this.setBearing(obj.direction)
  }

  turnRight() {
    let direction = ["north", "east", "south", "west"]
    let i = direction.indexOf(this.bearing)
    if (i + 1 < direction.length) {
      this.bearing = direction[i + 1];
    } else {
      this.bearing = direction[0];
    }
  }

  turnLeft() {
    let direction = ["north", "east", "south", "west"]
    let i = direction.indexOf(this.bearing)
    if (i - 1 >= 0) {
      this.bearing = direction[i - 1];
    } else {
      this.bearing = direction[3];
    }
  }

  advance() {
    let x = this.coordinates[0];
    let y = this.coordinates[1];
    switch(this.bearing) {
      case "north":
        this.setCoordinates(x, ++y);
        break;
      case "east":
        this.setCoordinates(++x, y);
        break;
      case "south":
        this.setCoordinates(x, --y);
        break;
      case "west":
        this.setCoordinates(--x, y);
        break;
    }
  }

    translateInstructions(task) {
      let t = task.toLowerCase().split("")
      t.forEach((letter) => {
        switch(letter) {
          case "a":
            this.advance()
            break;
          case "r":
            this.turnRight()
            break;
          case 'l':
            this.turnLeft()
            break;
        }
      })
    }

}

const robot = new Robot([0,0], "North")
