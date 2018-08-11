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

// function space
function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, ms*1000));
}

// My definitions
// array contains lyrics, and the second value determins when the next one should display
const intro = [
  ['Welcome to my little project..', 5],
  ['Welcome to my little project..', 4],
  ['Welcome to my little project..', 4],
  ['Welcome to my little project..', 4],
  ['Welcome to my little project..', 4],
  ['Welcome to my little project..', 4],
  ['Dovahkiin, Dovahkiin', 4],
  ['Naal ok zin los vahriin', 4],
  ['Wah dein vokul mahfaeraak ahst vaal!', 4],
  ['Ahrk fin norok paal graan', 4],
  ['Fod nust hon zindro zaan', 4],
  ['Dovahkiin, fah hin kogaan mu draal!', 3]
]

// My code
class Screen{
  center(){ // return center of screen
    return {x: this.xe / 2, y: this.ye / 2}
  }

  borders(){
    return [0, 0, this.x, this.y]
  }

  drawTextCenter(str){
    alert('test')
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = 'black';
    this.ctx.textAlign = 'center'; 
    this.ctx.fillText(str, this.x, this.y);
  }

  constructor(){
    this.canvas = document.getElementById("screen")
    this.ctx = this.canvas.getContext("2d")
    this.xs = 0 
    this.ys = 0
    this.xe = this.canvas.width
    this.ye = this.canvas.height
    this.c = this.center()

    // set screen to black
    this.ctx.fillStyle = "black"
    this.ctx.fillRect(...this.borders());
    
    
  }
}

const screen = new Screen()




// start process
const init = () => {
  var audio = new Audio('./audio/theme.mp3')    // Start audio of the game
                                                // Not storing these files on git, only working on my local computer.
  //audio.play();                               // leave it out for now.

  // start displaying text in the beginning of the page.

  for(let v of intro){
    
  }
  /*$.each(intro, (k, v) => {
    // started creating class Screen.
    await sleep(2)
    

  })*/
}

init();


// debug

var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",150,75);