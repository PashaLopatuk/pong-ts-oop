import { Ball } from "./ball";
import { Physics } from "./physics";
import { Render } from "./render";
import type { GameObject, PhysicsObject } from "./types";
import { Vector2 } from "./utils/vector";
import { Velocity } from "./velocity";

export class PongGame {
  private simulationSize = 20;
  private cScale: number;
  private timeStep = 1 / 60;

  private render!: Render;
  private physics!: Physics;

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

    this.render = new Render(ctx, this.cScale, width, height);
    this.physics = new Physics(
      this.timeStep,
      width / this.cScale,
      height / this.cScale,
    );
    this.physicsObjects = [...Array(50).keys()].map(() =>
      this.createBall(width, height),
    );
    this.staticObjects = [];
  }

  private createBall(width: number, height: number) {
    return new Ball(
      0.2,
      new Vector2(width / this.cScale / 2, height / this.cScale / 2),
      new Velocity(10 + 5 * Math.random(), 10 * Math.random()),
      this.randomColor,
    );
  }

  private get randomColor(): string {
    return (
      "hsl(" +
      360 * Math.random() +
      "," +
      (225 + 70 * Math.random()) +
      "%," +
      (85 + 10 * Math.random()) +
      "%)"
    );
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
