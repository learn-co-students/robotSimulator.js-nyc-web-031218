class Robot {

  constructor(coordinates, bearing) {
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(coordinate1, coordinate2){
    var c1 = coordinate1;
    var c2 = coordinate2
    let c = this.coordinates.splice(0,2,c1,c2);
    }

  setBearing(direction){
    const directions = ["north", "south", "east", "west"];
      if (directions.includes(direction)) {
        this.bearing = direction;
      } else { throw "Invalid Robot Bearing";}
  }

  place(x,y,direction) {
    const arr = []
      for (const key in x) {
        arr.push(x[key])
      }

    //we got multiple values from only x
      this.coordinates = [arr[0],arr[1]]
      this.bearing = arr[2]
  }

  turnRight(){
    if (this.bearing === "north"){
      this.bearing = "east"
    } else if (this.bearing ==="east"){
      this.bearing = "south"
    } else if (this.bearing ==="south"){
      this.bearing = "west"
    } else if (this.bearing ==="west"){
      this.bearing = "north"
    }

  }


  turnLeft(){
    if (this.bearing === "north"){
      this.bearing = "west"
    } else if (this.bearing ==="east"){
      this.bearing = "north"
    } else if (this.bearing ==="south"){
      this.bearing = "east"
    } else if (this.bearing ==="west"){
      this.bearing = "south"
    }
  }

    advance(){

      let x = this.coordinates[0]
      let y = this.coordinates[1]


      if (this.bearing ==="north"){
          this.coordinates = [x, y + 1]

      } else if (this.bearing ==="east"){
          this.coordinates = [x+1, y]
      } else if (this.bearing === "south"){
        this.coordinates = [x, y-1]
      } else if (this.bearing ==="west"){
        this.coordinates = [x-1, y]
      }
    }

    translateInstructions(instructions){
    const arr = instructions.split('')


      for(const i of arr){
        console.log(i)
        const a = this.advance.bind(this)
        const l = this.turnLeft.bind(this)
        const r = this.turnRight.bind(this)

        switch(i){
        case "L":
          l();
          break;
        case "R":
          r();
          break;
        case "A":
          a();
          break;
        }
      }




    }





}
