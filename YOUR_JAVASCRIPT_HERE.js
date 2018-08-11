var hero = {
  name: false,
  class: false,

  // stats
  health: 10,
  maxHealth: 10,
  mana: 10,
  maxMana: 10,
  stamina: 10,
  maxStamina: 10,
  shout: 10,
  maxShout: 10,

  // items
  inventory: [],
  weapon: {
    type: 'something',
    damage: 2
  },

  // other
  img: new Image(), // contains class image
  heroic: true      // satisfy mocha
}

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

const updateStats = () => {
  $('#health').attr('value', hero.health)
  $('#health').attr('max', hero.maxHealth)
  $('#mana').attr('value', hero.mana)
  $('#mana').attr('max', hero.maxMana)
  $('#stamina').attr('value', hero.stamina)
  $('#stamina').attr('max', hero.maxStamina)
  $('#shout').attr('value', hero.shout)
  $('#shout').attr('max', hero.maxShout)
  $('#inventory').empty()

  for(let i of hero.inventory){
    console.log(i)
  }
}




const rest = (o) => {
  o.health = 10 // satisfy mocha
  hero.health = maxHealth
  hero.mana = maxMana
  hero.stamina = maxStamina
  hero.shout = maxShout
  screen.dialog('You walked down the road into a new area')
  
  return o // satisfy mocha
}
const pickUpItem = () => {}
const equipWeapon = () => {}


// var decs
var started = false;


// function space
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// My code
class Screen{
  center(){ // return center of screen
    return [this.xe / 2, this.ye / 2]
  }

  fullScreen(){
    return [0, 0, this.xe, this.ye]
  }

  heroRect(){
    return [0, 0, 157, 222, 0, 0, 157, 222]
  }

  fill(color="white"){
    this.ctx.fillStyle = color;
    this.ctx.fillRect(...this.fullScreen());
  }

  drawImg(img, ...pos){
    this.ctx.drawImage(img, ...pos())
  }

  drawBg(){
    if(typeof this.bg == 'string'){
      this.fill(this.bg)
    } else {
      this.ctx.drawImage(this.bg, ...this.fullScreen())
    }
  }

  redraw(){
    this.drawBg()
    if(started){
      this.ctx.drawImage(hero.img, ...this.heroRect())
    }
  }

  dialog(text){
    $('#gametext').html(`<span>${text}</span>`)
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
    this.bg = "black"

    this.fill("black")
    this.drawTextCenter("Welcome..", 25, "white")
  }
}

class Controls{

  // Unbind click event, if no args are given all events
  unbind(id){
    // loop over key of args
    if(typeof id == 'undefined'){
      // remove all bindings
      for(let btn of this.buttons){
        btn.off()
      }
    } else if(typeof id == 'number'){
      // remove specific binding
      this.btn[id].off()
    }
  }

  // bind onclick event to button on id
  bind(i, fn){
    this.buttons[i].click(() => {
      fn()
    })
  }

  bindAll(fn){
    for(let i in fn){
      console.log(i)
      this.bind(i, fn[i])
    }
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

const actionList = []
class Action{
  constructor(){}
}

const scenarioList = []
const randomScenario = () => {
  let i = getRandomInt(0, scenarioList.length - 1)
  console.log('Doing selected scenario: ' + i)
  return scenarioList[i]
}
class Scenario{
  setBG(){
    screen.bg = this.bg
    screen.redraw()
  }

  write(text, buttons, callback){
    console.log(text)
    $('#gametext').html(`<span>${text ? text : this.text }</span>`)
    input.setText(text ? text : this.actions)
    input.unbind()
    input.bindAll(callback ? callback : this.callback)
  }

  constructor(imgsrc, text, actions, callback){
    let img = new Image()
    img.src = imgsrc

    this.bg = img
    this.text = text
    this.actions = actions
    this.callback = callback

    scenarioList.push(this)
  }
}

// Definitions
const screen = new Screen()  // Screen object
const input = new Controls() // Enable dynamic interaction with user input

// Add scenario's
new Scenario('./bg/1.png', 'You look around and see a huge mountain, what do you do?', [
  'Climb It!!',
  'Walk around',
  'Other Direction',
  'Rest',
], [
    () => {
      let i = getRandomInt(1, 10)
      if (i > 8) {
        screen.dialog('You fell from the rocks and took some damage')
        hero.health = - getRandomInt(1, 3)
      } else if (i > 5) {
        screen.dialog('You encountered an enemy on your way up!')
        // init battle
      } else if (i > 2) {
        screen.dialog('You have found a sword! + 2 damage')
        hero.inventory.push({
          weapon: 'A sword'
          damage: 4
        })
        hero.weapon = hero.inventory[0] // cheap trick for maybe demo :)
        // give item
      } else {
        screen.dialog('You climbed on the top of the mountain, uneventfull climb')
      }
    },
    () => {
      let i = getRandomInt(1, 10)
      if (i > 5) {
        screen.dialog('A ')
      } else {
        screen.dialog('You walked down the road into a new area')
      }
    },
    () => {

    },
    () => {
      rest()
    },
  ])

const startGame = () => {
  screen.bgc = false;
  started = true;

  let scn = randomScenario()
  console.log(scn)
  scn.write()
  scn.setBG()

  // Game over!
  /*
  screen.fill("black")
  screen.drawTextCenter("Game Over!", 30, "red")
  sleep(5).then(() => {
    // should reset stats, etc.
    mainMenu()
  })*/
}

// main manu
const mainMenu = () => {
  screen.fill("black")

  var classSelect = () => {
    input.unbind()
    input.setText(['Dragonborne', 'Mage', 'Warrior', 'Back'])
    input.bind(0, () => {
      hero.class = 'dragonborne'
      mainMenu()
    })
    input.bind(1, () => {
      hero.class = 'mage'
      mainMenu()
    })
    input.bind(2, () => {
      hero.class = 'warrior'
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
      hero.class = 'mage'
      hero.img.src = './bg/' + (hero.class ? hero.class : 'dragonbourne') + '.png'

      // disabled for easy testing
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
  audio.play();                               // leave it out for now.
  audio.currentTime = 10

  // loop through each title in intro, add them to a sleep callback
  var delay = 0
  for(let v of intro){
    delay =+ v[1] // // as time expires, the duration of sleep should increase

    sleep(v[1] + delay).then(() => {
      if(!stopIntro){
        screen.drawTextCenter(v[0], 17, "white")
      }
    })
  }

  // timers are set and code directly continues here for so we can skip the intro
  input.setText(['Skip'])
  input.bind(0, ()=>{
    stopIntro = true; // hard global boolean to stop the sleeping functions write text
    mainMenu()
  })

}

// start process
const init = () => {
  playIntro() // start intro
  setTimeout(updateStats(), 1000) // update the player stats life every second
}

init();


// debug

