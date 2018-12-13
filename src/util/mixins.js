function getTitle(vm) {
  const { title } = vm.$options
  if (title) {
    return (typeof title === 'function') ? title.call(vm) : title
  }
}

let title = {
  created() {
    const title = getTitle(this)
    if (title) {
      this.$ssrContext.title = `Legwork Studio / ${title}`
    }
  },
}
if (process.env.VUE_ENV !== 'server') {
  title = {
    mounted() {
      const title = getTitle(this)
      if (title) {
        document.title = `Legwork Studio / ${title}`
      }
    },
  }
}

export const titleMixin = title