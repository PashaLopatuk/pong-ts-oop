import { Controls } from "./component/controls";
import { Physics } from "./component/physics";
import { Player } from "./component/player";
import { Render } from "./component/render";
import { Ball } from "./entity/ball";
import { Vector2 } from "./lib/vector";
import type { GameObject, PhysicsObject } from "./utils/types";

export class PongGame {
  private simulationSize = 20;
  private cScale!: number;
  private simulativeWidth!: number;
  private simulativeHeight!: number;
  private timeStep = 1 / 60;

  private render!: Render;
  private physics!: Physics;
  private controls!: Controls;
  private player!: Player;

  private physicsObjects!: Array<PhysicsObject>;
  private staticObjects!: Array<GameObject>;

  constructor({
    canvas,
    width,
    height,
  }: {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
  }) {
    const ctx = canvas.getContext("2d");

    if (ctx === null) {
      return;
    }

    this.cScale = Math.min(canvas.width, canvas.height) / this.simulationSize;

    this.simulativeWidth = width / this.cScale;
    this.simulativeHeight = height / this.cScale;

    this.render = new Render(ctx, this.cScale, width, height);
    this.physics = new Physics(
      this.timeStep,
      this.simulativeWidth,
      this.simulativeHeight,
    );
    this.controls = new Controls(canvas);

    this.player = new Player(
      new Vector2(
        this.simulativeWidth - this.simulativeWidth * 0.1,
        this.simulativeHeight / 2,
      ),
    );

    this.controls.registerPlayer(this.player);

    this.physicsObjects = [...Array(50).keys()].map(Ball.createRandom);
    this.staticObjects = [this.player];
  }

  get objects() {
    return [...this.physicsObjects, ...this.staticObjects];
  }

  simulate() {
    for (const obj of this.physicsObjects) {
      this.physics.process(obj);
    }
  }

  draw() {
    this.render.updateScreen();

    for (const obj of this.objects) {
      this.render.draw(obj);
    }
  }

  run() {
    this.simulate();
    this.draw();

    requestAnimationFrame(this.run.bind(this));
  }
}
