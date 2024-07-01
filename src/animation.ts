export class Sprite {
    position: Position;
    width: number;
    height: number;

    constructor(position:Position, width: number, height: number) {
        this.position = position;
        this.width = width;
        this.height = height;
    }

    //Draws to the given canvas.
    draw(c: CanvasRenderingContext2D) {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
}

export interface Position {
    x: number;
    y: number;
}