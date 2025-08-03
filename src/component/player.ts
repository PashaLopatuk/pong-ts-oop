import type { Vector2 } from "../lib/vector";
import type { GameObject } from "../utils/types";
import { BoxHitbox } from "./hitbox/box-hitbox";
import type { Hitbox } from "./hitbox/hitbox";

export class Player implements GameObject {
  public width = 0.5;
  public height = 25;

  public hitbox: Hitbox;

  constructor(public position: Vector2) {
    this.hitbox = new BoxHitbox(this.width, this.height);
  }
}
