export class Vector2 {
  constructor(
    public x: number,
    public y: number,
  ) {}
  
  multiply(multiplier: number) {
    return new Vector2(
      this.x * multiplier,
      this.y * multiplier
    )
  }
}

export function add(vec1: Vector2, vec2: Vector2) {
  return new Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
}
