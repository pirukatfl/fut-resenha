// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    tsconfig: {
      compilerOptions: {
        baseUrl: '.',
        paths: {
          '@/*': ['./*'],
          '@/types/*': ['./types/*']
        }
      }
    }
  },
  autoImports: {
    imports: [
      {
        'supabase': ['createClient', 'Database']
      }
    ]
  }
})
