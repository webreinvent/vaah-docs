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
        name: 'vaahcms-1x',
        label: 'VaahCMS',
        icon: 'i-heroicons-cube',
        suffix: `v1.x`,
        click: () => select({ name: 'vaahcms-1x' })
      }, {
        id: '2',
        name: 'vaahcms-2x',
        label: 'VaahCMS',
        icon: 'i-heroicons-cube-transparent',
        suffix: 'v2.x',
        click: () => select({ name: 'vaahcms-2x' })
      }];
    }

    return item;
  })

  const branch = computed(() => branches.value.find(b => b.name === (route.path.startsWith('/vaahcms-1x') ? 'vaahcms-1x' : route.path.startsWith('/vaahcms-2x') ? 'vaahcms-2x' : 'main')))

  function select (b) {

    if (b.name === branch.value.name) {
      return
    }

    router.push('/'+b.name);
  }

  return {
    branches,
    branch
  }
}
