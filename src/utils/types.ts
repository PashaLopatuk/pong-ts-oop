import type { Hitbox } from "../component/hitbox/hitbox";
import type { Vector2 } from "../lib/vector";
import type { Velocity } from "../lib/velocity";

export interface GameObject {
  position: Vector2
  hitbox: Hitbox
}

export interface PhysicsObject extends GameObject {
  velocity: Velocity
}