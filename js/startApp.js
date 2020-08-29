const breakOutGame = {
    name: 'break out game',
    authors:  'Ana Bermúdez, Cecilia Moreira, Juan Semprún',
    version: '1.0.0',
    license: undefined,
    description: 'Proyecto 1, Canvas game',
    canvasId: undefined,
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    keycode : {
        left: 37,
        right: 39
    },
    paddle: undefined,
    paddleSize :{
        w: 200,
        h: 30
    },
    // paddlePos : {
    //     x: (canvasSize.w/2) - (paddleSize.w / 2),
    //     y: (canvasSize.h - 100)
    // },
    ball: undefined, 
    ballSize : {
        w:25,
        h: 5
    },

    frame: 0,


    init(id){
        this.canvasId = id
        this.ctx = document.getElementById(this.canvasId).getContext('2d')
        console.log(this.ctx)
        this.setDimensions()
        this.setEventListener()   
        this.start()
    },


    setDimensions(){
        document.getElementById(this.canvasId).setAttribute('width', window.innerWidth)
        document.getElementById(this.canvasId).setAttribute('height', window.innerHeight)
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
    },


    setEventListener(){
        document.onkeydown = e => {
            e.keyCode === this.keycode.left ? this.paddle.movePaddle('left') : null
            e.keyCode === this.keycode.right ? this.paddle.movePaddle('right') : null
            //console.log(e)
        }
    },


    start(){

        this.reset()

        this.interval = setInterval(() => {
            this.clearScreen()
            this.drawAll()
            
         }, 100)
        
    },


    reset() {
        this.drawBackground()
        const centerX = (this.canvasSize.w/2) - (this.paddleSize.w / 2)
        const centerY = (this.canvasSize.h - 100)
        this.paddle = new Paddle(this.ctx, centerX,centerY, this.paddleSize.w, this.paddleSize.h, this.canvasSize)
        this.ball = new Ball (this.ctx, centerX, this.canvasSize.h/2, this.ballSize.w, this.ballSize.h, this.canvasSize)
        
    },


    drawAll(){
        this.drawBackground()
        this.paddle.draw()
        this.ball.draw()
        
    },


    drawBackground(){
        this.ctx.fillStyle = '#d1ebf7'
        this.ctx.fillRect(0,0, this.canvasSize.w, this.canvasSize.h)
    },


    // drawPaddle(){
    //     const centerPaddleX = (this.canvasSize.w/2) - (this.paddleSize.w / 2)
    //     const centerPaddleY = (this.canvasSize.h - 100)
    //     this.paddle = new Paddle(this.ctx, centerPaddleX ,centerPaddleY, this.paddleSize.w, this.paddleSize.h, this.canvasSize) 
    //     //this.paddle.draw()
    //     //console.log(this.paddle)
    //     this.interval = setInterval(() => {
    //         // this.drawBackground()
    //         this.frame++
    //         this.clearScreen()
    //         this.drawBackground()
    //         this.paddle.draw()

    //     }, 100)

  


    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
      },


}