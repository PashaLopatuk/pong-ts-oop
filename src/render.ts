import { Ball } from "./ball";
import type { GameObject } from "./types";

type Drawable = GameObject;

export class Render {
  constructor(
    private ctx: CanvasRenderingContext2D,
    private scale: number,
    private width: number,
    private height: number,
  ) {}

  private scaleX(x: number) {
    return x * this.scale;
  }

  private scaleY(y: number) {
    return this.height - y * this.scale;
  }

  private drawBall(ball: Ball) {
    this.ctx.fillStyle = ball.color;
    this.ctx.beginPath();
    this.ctx.arc(
      this.scaleX(ball.position.x),
      this.scaleY(ball.position.y),
      this.scale * ball.radius,
      0,
      2 * Math.PI,
    );

    this.ctx.closePath();
    this.ctx.fill();
  }

  draw(obj: Drawable) {
    if (obj instanceof Ball) {
      this.drawBall(obj);
    }
  }

  updateScreen() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
