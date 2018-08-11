// did this code to test mocha.
var hero ={
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'something',
        damage: 2
    }
}




// My code
class Screen{
  center(){ // return center of screen
    return {x: this.w / 2, y: this.h / 2}
  }

  drawTextCenter(str){
    let d = this.center()
    this.ctx.font="15px white Arial"
    this.ctx.textAlign = 'center'; 
    this.ctx.fillText("Johan was here", d.x, d.y); 
  }

  constructor(){
    this.canvas = document.getElementById("screen")
    this.ctx =  this.canvas.getContext("2d"),
    this.w =  this.canvas.width
    this.h =  this.canvas.height

    ctx.fillStyle = "black"
  }
}

const screen = new Screen()

// array contains lyrics, and the second value determins when the next one should display
const intro = [
    ['Welcome to my little project..', 10],
    ['Welcome to my little project..', 10],
    ['Welcome to my little project..', 10],
    ['Welcome to my little project..', 10],
    ['Welcome to my little project..', 10],
    ['Welcome to my little project..', 10],
    ['Dovahkiin, Dovahkiin', 100],
    ['Naal ok zin los vahriin', 100],
    ['Wah dein vokul mahfaeraak ahst vaal!', 100],
    ['Ahrk fin norok paal graan', 100],
    ['Fod nust hon zindro zaan', 100],
    ['Dovahkiin, fah hin kogaan mu draal!']
]


// start process
const init = () => {
  var audio = new Audio('./audio/theme.mp3')    // Start audio of the game
                                                // Not storing these files on git, only working on my local computer.
  //audio.play();                               // leave it out for now.

  $.each(intro, (k, v) => {
    // started creating class Screen.
    console.log(v)
    
  })
}

init();