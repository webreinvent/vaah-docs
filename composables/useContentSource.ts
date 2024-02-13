import pkg from '@nuxt/ui-pro/package.json'

export const useContentSource = () => {
  const route = useRoute()
  const router = useRouter()
  const config = useRuntimeConfig().public

  const branches = computed(() => {
    let item = [];

    if(route.path.startsWith('/vaahcms')){
      item = [{
        id: '1',
        name: '1x',
        label: 'VaahCMS',
        icon: 'i-heroicons-cube',
        suffix: `v1.x`,
        click: () => select({ name: '1x' })
      }, {
        id: '2',
        name: '2x',
        label: 'VaahCMS',
        icon: 'i-heroicons-cube-transparent',
        suffix: 'v2.x',
        click: () => select({ name: '2x' })
      }];
    }

    return item;
  })

  const branch = computed(() => branches.value.find(b => b.name === (route.path.includes('/vaahcms/1x') ? '1x' : route.path.includes('/vaahcms/2x') ? '2x' : 'main')))

  function select (b) {
    
    if (b.name === branch.value.name) {
      return
    }

    router.push(`/vaahcms/${b.name}`);
  }

  return {
    branches,
    branch
  }
}
