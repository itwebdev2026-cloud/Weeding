const basePath = process.env.NODE_ENV === 'production' ? '/Weeding' : '';

export function assetPath(path: string): string {
  return `${basePath}/${path.replace(/^\//, '')}`;
}