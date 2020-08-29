class Ball {

    constructor(ctx, ballPosX, ballPosY, ballW, ballH, canvasSize){
        this.ctx = ctx
        this.ballPos = {
            x: ballPosX,
            y: ballPosY
        }
        this.ballSize = {
            w: ballW,
            h: ballH
        }
        this.ballVel = {
            x: 10,
            y: 1
        }
        this.ballGravity = .4
        this.canvasSize = canvasSize  
        
    }

    draw(){

        this.move()
        //this.ctx.lineWidth = 20
        this.ctx.fillStyle = 'red'
        this.ctx.arc(this.canvasSize.w / 2, this.canvasSize.h / 2, 15, 0, Math.PI * 2)
        //this.ctx.stroke()
        this.ctx.fill()
        
    }

    move(){
        this.ballPos.x += this.ballVel.x
        this.ballVel.y += this.ballGravity
        this.ballPos.y += this.ballVel.y
        console.log(this.ballPos.x += this.ballVel.x)
        // this.ballPos.y > this.canvasSize.h - this.ballSize.h ? this.ballVel.y *= -1 : null
        // this.ballPos.x > this.canvasSize.w - this.ballSize.w ? this.ballVel.x *= -1 : null
        // console.log(this.ballPos.x)

        // this.posX += this.velX;
        // this.posY += this.velY;
        // this.velY += this.gravity;
        // if (this.posY >= this.playerPosY0 + this.playerHeight) {
        // this.velY *= -1;

    }
}