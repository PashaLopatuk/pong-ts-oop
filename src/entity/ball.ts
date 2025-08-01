import { Vector2 } from "../lib/vector";
import { Velocity } from "../lib/velocity";
import { randomColor } from "../utils/random";
import type { PhysicsObject } from "../utils/types";

export class Ball implements PhysicsObject {
  constructor(
    public radius: number,
    public position: Vector2,
    public velocity: Velocity,
    public color: string,
  ) {}

  static createRandom(x: number = 0, y: number = 0) {
    return new Ball(
      0.2,
      new Vector2(x, y),
      new Velocity(10 + 5 * Math.random(), 3 + 2 * Math.random()),
      randomColor(),
    );
  }
}
