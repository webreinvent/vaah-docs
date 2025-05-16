import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({        
      type: 'page',
      source: { include: '**/*.md'}
    }),
    data: defineCollection({
      type: 'data',
      source: '**/*.yml',
      schema: z.object({
        name: z.string(),
        avatar: z.string(),
        url: z.string()
      })
  })
}
})
