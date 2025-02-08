export const useIndexStore = defineStore('index', () => {
  const _pageTransition = reactive({
    name: 'slide-right',
    mode: 'out-in',
  })

  function setPageTransitionName(val: string) {
    _pageTransition.name = val
  }

  const pageTransition = computed(() => _pageTransition)

  return {
    pageTransition,
    setPageTransitionName,
  }
})
