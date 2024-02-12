import pkg from '@nuxt/ui-pro/package.json'

export const useContentSource = () => {
  const route = useRoute()
  const router = useRouter()
  const config = useRuntimeConfig().public

  const branches = computed(() => [{
  const branches = computed(() => route.path !== '/vaahcms'?[]:[{
    id: 'main',
    name: 'main',
    label: 'VaahCMS',
    icon: 'i-heroicons-cube',
    suffix: `v1.x`,
    click: () => select({ name: 'main' })
  }, {
    id: 'dev',
    name: 'dev',
    label: 'VaahCMS',
    icon: 'i-heroicons-cube-transparent',
    suffix: 'v2.x',
    click: () => select({ name: 'dev' })
  }])

  const branch = computed(() => branches.value.find(b => b.name === (route.path.startsWith('/dev') ? 'dev' : route.path.startsWith('/pro') ? 'pro' : 'main')))

  function select (b) {
    if (b.name === branch.value.name) {
      return
    }

    if (b.name === 'pro') {
      router.push('/pro/getting-started')
      return
    }

    if (branch.value.name === 'pro') {
      if (b.name === 'dev') {
        router.push('/dev/getting-started')
      } else {
        router.push('/getting-started')
      }

      return
    }

    if (b.name === 'dev') {
      if (route.path.startsWith('/dev')) {
        return
      }

      router.push(`/dev${route.path}`)
    } else {
      router.push(route.path.replace('/dev', ''))
    }
  }

  return {
    branches,
    branch
  }
}
