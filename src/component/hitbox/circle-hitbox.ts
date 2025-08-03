import { Hitbox } from "./hitbox";
import { HitboxType } from "./types";

export class CircleHitbox extends Hitbox {
  hitboxType = HitboxType.Circle;

  constructor(public radius: number) {
    super();
  }
}
