import { Ball } from "../entity/ball";
import type { GameObject } from "../utils/types";
import { Player } from "./player";

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

  private drawPlayer(player: Player) {
    console.log(player.position.x, player.position.y);
    this.ctx.beginPath();
    this.ctx.rect(
      this.scaleX(player.position.x),
      this.scaleY(player.position.y),
      this.scaleX(player.width),
      this.scaleY(player.height),
    );
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  }

  private drawCenter(obj: Drawable) {
    // this.ctx.beginPath();
    // this.ctx.fillStyle = "red";
    // this.ctx.rect(
    //   this.scaleX(obj.position.x),
    //   this.scaleY(obj.position.x),
    //   this.scaleX(1),
    //   this.scaleY(1),
    // );
    // this.ctx.fill();
    // this.ctx.closePath();
  }

  draw(obj: Drawable) {
    this.drawCenter(obj);
    if (obj instanceof Ball) {
      this.drawBall(obj);
    }

    if (obj instanceof Player) {
      this.drawPlayer(obj);
    }
  }

  updateScreen() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
