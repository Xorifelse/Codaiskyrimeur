// did this code to satisfy mocha.
const hero ={
    name: false,
    class: false,
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
    this.ctx.fillRect(...this.borders());
  }

  redraw(){
    this.fill(this.bgc)
  }


  drawTextCenter(str, size, color){
    this.redraw()
    this.ctx.font = size + "px Arial";
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
    this.drawTextCenter("Welcome..", 25, "white")
  }
}

class Controls{

  // Unbind click event, if no args are given all events
  unbind(id){
    // loop over key of args
    if(typeof id == 'undefined'){
      for(let btn of this.buttons){
        btn.off()
      }
    } else if(typeof id == 'integer'){
      this.btn[id].off()
    }
  }

  // bind onclick event to button on id
  bind(i, fn){
    this.buttons[i].click(() => {
      fn()
    })
  }

  setText(l){
    // whipe out text from all buttons
    for(let btn of this.buttons){
      btn.html("")
    }

    // set new text
    for(let i in l){
      this.buttons[i].html(l[i])
    }
  }

  constructor(){
    // Grab all button elements and set them in an array
    this.buttons = [$('#btn_a'), $('#btn_b'), $('#btn_c'), $('#btn_d')]
  }
}

class Scenario(){
  constructor(bgimg, text, actions){
    

  }
}

// Definitions
const screen = new Screen()  // Screen object
const input = new Controls() // Enable dynamic interaction with user input
const scene = new Scenario() //
const intro = [              // array contains lyrics, and the second value determins when the next one should display
  ['To my little project...', 4,],
  ['Last saturday ...', 6],
  ['was probably hectic', 8],
  ['Quite some coding', 10],
  ['Went into this', 12],
  ['This screen you see', 14],
  ['Is drawn by code', 16],
  ['I call it...', 18],
  ['CODAISkyrimSEUR',20],
  ['Dovahkiin!!, Dovahkiin!!', 22],
  ['Naal ok zin los vahriin', 23],
  ['Wah dein vokul mahfaeraak ahst vaal!', 24],
  ['Ahrk fin norok paal graan', 25],
  ['Fod nust hon zindro zaan', 26],
  ['Dovahkiin, fah hin kogaan mu draal!', 27],
  ['Yeah yeah, you can skip intro now', 30]
]

const startGame = () => {
}

// main manu
const mainMenu = () => {
  screen.fill("black")

  var classSelect = () => {
    input.unbind()
    input.setText(['Dragonborne', 'Mage', 'Warrior', 'Back'])
    input.bind(0, () => {
      hero.class = 'Dragonborne'
      mainMenu()
    })
    input.bind(1, () => {
      hero.class = 'Mage'
      mainMenu()
    })
    input.bind(2, () => {
      hero.class = 'Warrior'
      mainMenu()
    })
    input.bind(3, () => {
      mainMenu()
    })
  }

  var mainScreen = () => {
    input.unbind()
    input.setText(['Name', 'Class', 'Start', 'Quit'])

    // set hero name
    input.bind(0, () => {
      hero.name = window.prompt("Please enter the name of your hero's name:", hero.name ? hero.name : "Dovahkiin")
      mainMenu()
    })

    // bind class select
    input.bind(1, () => {
      classSelect()
    })

    // start game
    input.bind(2, () => {
      if(!hero.name || !hero.class){
        alert('No hero name or class setup!')
      } else {
        startGame()
      }
    })

    // exit game
    input.bind(3, () => {
      alert("Did you take an arrow to the knee? You WILL play this game!@a")
    })
  }

  $('#hero_name').html(hero.name)
  mainScreen()
}

// intro
var stopIntro = false
const playIntro = () => {
  var audio = new Audio('./audio/theme.mp3')    // Start audio of the game
                                                // Not storing these files on git, only working on my local computer (copyright)
  //audio.play();                               // leave it out for now.
  //audio.currentTime = 10


  var delay = 0
  for(let v of intro){
    delay =+ v[1]

    sleep(v[1] + delay).then(() => {
      if(!stopIntro){
        screen.drawTextCenter(v[0], 17, "white")
      }
    })
  }

  input.setText(['Skip'])
  input.bind(0, ()=>{
    stopIntro = true;
    mainMenu()
  })

}

// start process
const init = () => {
  playIntro()
}

init();


// debug

