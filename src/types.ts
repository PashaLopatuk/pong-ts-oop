import type { Vector2 } from "./utils/vector";
import type { Velocity } from "./velocity";

export interface GameObject {
  position: Vector2
}

export interface PhysicsObject extends GameObject {
  velocity: Velocity
}