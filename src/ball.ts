import type { PhysicsObject } from "./types";
import { type Vector2 } from "./utils/vector";
import { Velocity } from "./velocity";

export class Ball implements PhysicsObject {
  constructor(
    public radius: number,
    public position: Vector2,
    public velocity: Velocity,
    public color: string,
  ) {}
}
