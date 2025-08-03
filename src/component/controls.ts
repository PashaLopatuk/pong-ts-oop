import { Vector2 } from "../lib/vector";
import type { GameObject } from "../utils/types";

export class Controls {
  player?: GameObject;

  playerSpeed = 20;

  constructor(
    private screen: HTMLElement,
    private timeStep: number,
  ) {
    this.initEventListeners();
  }

  public registerPlayer(player: GameObject) {
    this.player = player;
  }

  private processPlayerMovement(direction: Vector2) {
    if (!this.player) return;

    this.player.position.x += direction.x;
    this.player.position.y += direction.y;
  }

  private processKey(key: string) {
    switch (key) {
      case "ArrowUp": {
        this.processPlayerMovement(
          new Vector2(0, this.playerSpeed * this.timeStep),
        );
        break;
      }
      case "ArrowDown": {
        this.processPlayerMovement(
          new Vector2(0, -this.playerSpeed * this.timeStep),
        );
        break;
      }
      case "ArrowLeft": {
        break;
      }
      case "ArrowRight": {
        break;
      }
    }
  }

  private processEvent(event: KeyboardEvent) {
    console.log(event.key);
    this.processKey(event.key);
  }

  private initEventListeners() {
    document.addEventListener("keydown", this.processEvent.bind(this));
  }
}
