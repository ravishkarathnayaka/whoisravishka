export function smoothScrollTo(elementId: string): void {
  const el = document.getElementById(elementId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function createLerp(current: number, target: number, factor: number = 0.08): number {
  return current + (target - current) * factor;
}
