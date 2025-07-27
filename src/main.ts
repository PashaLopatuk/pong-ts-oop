import { PongGame } from "./game";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <canvas></canvas>
`;

const canvas = document.querySelector("canvas");

if (!canvas) {
  throw new Error();
}

canvas.width = innerWidth - 100;
canvas.height = innerHeight - 20;

const game = new PongGame({
  canvas: canvas,
  width: canvas.width,
  height: canvas.height,
});

game.run.call(game);
