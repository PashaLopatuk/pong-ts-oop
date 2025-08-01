import { Ball } from "../entity/ball";
import { add } from "../lib/vector";
import { Velocity } from "../lib/velocity";
import type { PhysicsObject } from "../utils/types";

export class Physics {
  public gravityVelocity = new Velocity(0, -9.8067);

  constructor(
    private timeStep: number,
    private boundingWidth: number,
    private boundingHeight: number,
  ) {}

  private get gravityVelocityFrame() {
    return this.gravityVelocity.multiply(this.timeStep);
  }

  private processGravity(obj: PhysicsObject) {
    obj.velocity = add(obj.velocity, this.gravityVelocityFrame);
  }

  private processObjectMovement(obj: PhysicsObject) {
    obj.position = add(obj.position, obj.velocity.multiply(this.timeStep));
  }

  public process(obj: PhysicsObject) {
    this.processGravity(obj);
    this.processObjectMovement(obj);
    if (obj instanceof Ball) {
      this.processBallWallCollision(obj);
    }
  }

  private processBallWallCollision(ball: Ball) {
    if (ball.position.x < 0) {
      ball.position.x = 0;
      ball.velocity.x = -ball.velocity.x;
    }
    if (ball.position.x > this.boundingWidth) {
      ball.position.x = this.boundingWidth;
      ball.velocity.x = -ball.velocity.x;
    }

    if (ball.position.y < 0) {
      ball.position.y = 0;
      ball.velocity.y = -ball.velocity.y;
    }
    if (ball.position.y > this.boundingHeight) {
      ball.position.y = this.boundingHeight;
      ball.velocity.y = -ball.velocity.y;
    }
  }
  

}
