function getTitle(vm) {
  const { title } = vm.$options
  if (title) {
    return (typeof title === 'function') ? title.call(vm) : title
  }
}

let titleObj = {
  created() {
    const title = getTitle(this)
    if (title) {
      this.$ssrContext.title = `Legwork Studio / ${title}`
    }
  },
}
if (process.env.VUE_ENV !== 'server') {
  titleObj = {
    mounted() {
      const title = getTitle(this)
      if (title) {
        document.title = `Legwork Studio / ${title}`
      }
    },
  }
}

export const title = titleObj

export const delay = {
  methods: {
    delay(time, callback) {
      if (time > 0) {
        return setTimeout(callback, time)
      } else {
        callback()
        return setTimeout(() => {
        }, time)
      }
    },
  },
}

export const autofocus = {
  mounted() {
    this.focusAutoFocusable()
  },
  activated() {
    this.focusAutoFocusable()
  },
  methods: {
    focusAutoFocusable() {
      if (this.$refs['autofocus']) this.$refs['autofocus'].focus()
    }
  }
}
