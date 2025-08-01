import { Vector2 } from "../lib/vector";
import type { GameObject } from "../utils/types";

export class Controls {
  player?: GameObject;

  playerSpeed = 0.5;

  constructor(private screen: HTMLElement) {
    this.initEventListeners();
  }

  public registerPlayer(player: GameObject) {
    this.player = player;
  }

  private processPlayerMovement(direction: Vector2) {
    if (!this.player) return;

    this.player.position.x += direction.x;
    this.player.position.x += direction.y;
  }

  private processKey(key: string) {
    switch (key) {
      case "ArrowUp": {
        this.processPlayerMovement(new Vector2(0, this.playerSpeed));
        break;
      }
      case "ArrowDown": {
        this.processPlayerMovement(new Vector2(0, -this.playerSpeed));
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

  private initEventListeners() {
    this.screen.addEventListener(
      "keypress",
      ((event) => {
        this.processKey(event.key);
      }).bind(this),
    );
  }
}
