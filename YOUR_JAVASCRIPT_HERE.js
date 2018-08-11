// did this code to satisfy mocha.
const hero ={
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'something',
        damage: 2
    }
}


const rest = (o) => {
  o.health = 10
  hero.health = 10
  return o
}
const pickUpItem = () => {}
const equipWeapon = () => {}


// function space
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
}

// My code
class Screen{
  center(){ // return center of screen
    return [this.xe / 2, this.ye / 2]
  }

  borders(){
    return [0, 0, this.xe, this.ye]
  }

  fill(color="white"){
    this.ctx.fillStyle = color;
    console.log(this.borders())
    this.ctx.fillRect(...this.borders());
  }

  redraw(){
    this.fill(this.bgc)
  }


  drawTextCenter(str, color){
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle =  color;
    this.ctx.textAlign = 'center'; 
    this.ctx.fillText(str, ...this.center());
  }

  constructor(){
    this.canvas = document.getElementById("screen")
    this.ctx = this.canvas.getContext("2d")
    this.xs = 0 
    this.ys = 0
    this.xe = this.canvas.width
    this.ye = this.canvas.height
    this.bgc = "black"

    this.fill("black")
    this.drawTextCenter("Welcome..", "white")
  }
}

// Definitions
const screen = new Screen() // Screen object
const intro = [             // array contains lyrics, and the second value determins when the next one should display
  ['Welcome to my little project..', 5],
  ['Welcome to my little project..', 40],
  ['Welcome to my little project..', 45],
  ['Welcome to my little project..', 46],
  ['Welcome to my little project..', 47],
  ['Dovahkiin, Dovahkiin', 4],
  ['Naal ok zin los vahriin', 4],
  ['Wah dein vokul mahfaeraak ahst vaal!', 4],
  ['Ahrk fin norok paal graan', 4],
  ['Fod nust hon zindro zaan', 4],
  ['Dovahkiin, fah hin kogaan mu draal!', 3]
]


// intro
var stopIntro = false
const playIntro = () => {
  for(let v of intro){
    let delay = v[1]++


    console.log(v[0])
    sleep(v[1]).then(() => {
      if(!stopIntro){
        screen.drawTextCenter(v[0])
      }
    })
    
  }

}

// start process
const init = () => {
  var audio = new Audio('./audio/theme.mp3')    // Start audio of the game
                                                // Not storing these files on git, only working on my local computer.
  //audio.play();                               // leave it out for now.
  
  playIntro()
}

init();


// debug

