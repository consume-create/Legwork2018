const fs = require('fs')
import {createApp} from './application'

// Since we have static data we can load it from the filesystem.
const readData = () => JSON.parse(fs.readFileSync('public/data.json'))
const loadData = (r) => r ? readData() : data
const data = readData()

// This exported function will be called by `bundleRenderer`. This is where we
// perform a data load to set the state of our application before rendering it.
export default (context) => {
  return new Promise((resolve, reject) => {
    const { url } = context

    // create the application and set the base data
    const { app, router, store } = createApp(({ store }) => {
      store.state.data = loadData(process.env.NODE_ENV !== 'production')
    })

    // ensure the route hit
    const { fullPath } = router.resolve(url).route
    if (fullPath !== url) return reject({ url: fullPath })

    // set router's location
    router.push(url)

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      context.state = store.state
      resolve(app)
    }, reject)
  })
};
