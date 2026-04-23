import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://focowoman.com.br';

  const routes = [
    '',
    '/catalogo',
    '/institucional/sobre',
    '/institucional/contato',
    '/institucional/trocas-devolucoes',
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}