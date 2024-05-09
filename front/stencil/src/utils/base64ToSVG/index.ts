export function base64ToSVG(base64: string): string {
  if (base64.startsWith('data:image/svg+xml;base64,')) {
    const base64Encoded = base64.split('data:image/svg+xml;base64,')[1];

    return atob(base64Encoded);
  }

  return base64;
}