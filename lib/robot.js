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
    setCoordinates(args.x, args.y)
    setBearing(args.direction)
    console.log(this.bearing)
  }

}
