import type { MetadataRoute } from 'next'
import { seo } from '@/data/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: seo.url,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
