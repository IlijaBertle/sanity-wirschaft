import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'v0tu0k34',
  dataset: 'production',
  apiVersion: '2026-07-02',
  useCdn: true,
})
