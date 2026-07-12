export function withBase(path = '/') {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}` || '/';
}

export function absoluteUrl(path = '/') {
  const site = import.meta.env.SITE || 'https://akhil2453.github.io/akhil-portfolio';
  const baseUrl = site.endsWith('/') ? site : `${site}/`;
  const relativePath = path.replace(/^\//, '');
  return new URL(relativePath, baseUrl).toString();
}
