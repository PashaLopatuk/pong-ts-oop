import { Hitbox } from "./hitbox";
import { HitboxType } from "./types";

export class BoxHitbox extends Hitbox {
  public hitboxType = HitboxType.Box;

  constructor(
    public width: number,
    public height: number,
  ) {
    super();
  }
}
