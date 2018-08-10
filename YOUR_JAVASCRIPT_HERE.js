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
  center(){
    // from this point on, first arg is x and second is y.
    return {w: this.w / 2, h: this.h / 2}
  }

  constructor(){
    this.canvas = document.getElementById("screen")
    this.ctx =  this.canvas.getContext("2d"),
    this.w =  this.canvas.width
    this.h =  this.canvas.height
  }
}

const screen = new Screen()

ctx.fillStyle = "black"

ctx.font = 'normal bold 20px "Press Start 2P"'; 
ctx.textAlign = 'center'; 



ctx.font="15px white Arial"
ctx.fillText("Johan was here", w_center, h_center); 


const 



// start process
const init = () => {
  screen.ctx.fillStyle = "black"         // set screen to black
    // Start audio of the game
    // Not storing these files on git, only working on my local computer.
    var audio = new Audio('./audio/theme.mp3')
    //audio.play();

    // array contains lyrics, and the second value determins when the next one should display
    let intro = [
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

    $.each(intro, (i, v) = {
      // started creating class Screen.
    })
}

init();