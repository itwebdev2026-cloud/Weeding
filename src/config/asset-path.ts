const basePath = process.env.NODE_ENV === 'production' ? '/wedding-invitation' : '';

export function assetPath(path: string): string {
  return `${basePath}/${path.replace(/^\//, '')}`;
}