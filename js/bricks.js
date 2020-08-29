class Brick {

    constructor(ctx, brickPosX, brickPosY, brickSizeW, brickSizeH, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.brickPos = {
            x: brickPosX,
            y: brickPosY
        }
        this.brickSize = {
            w: brickSizeW,
            h: brickSizeH
        }

    }

    draw() {

        this.ctx.fillRect(this.brickPos.x, this.brickPos.y, this.brickSize.w, this.brickSize.h)

    }

}