export default interface Snake {
  length: number;
  x: number;
  y: number;
  up(): void;
  down(): void;
  right(): void;
  left(): void;
  eat(): void;
}
