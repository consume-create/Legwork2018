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
      this.$ssrContext.title = `Vue HN 2.0 | ${title}`
    }
  },
}
if (process.env.VUE_ENV !== 'server') {
  title = {
    mounted() {
      const title = getTitle(this)
      if (title) {
        document.title = `Vue HN 2.0 | ${title}`
      }
    },
  }
}

export const titleMixin = title