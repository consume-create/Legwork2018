# legwork2018

> The Legwork 2018 Site

## Build Setup

``` bash
## Start Docker
docker-compose up
```

The site will be served at <http://localhost:8080>.

## Under the hood
We are using Server Side Rendering and prefetching all data to ensure speedy delivery of the site and content.

## Branches
- Day-to-day dev work should happen on the `dev` branch or a feature branch that is merged into dev.
- The `staging` branch should be kept up to date with staging.
- The `master` branch should be kept up to date with production.

## Structure
- `app.vue` - The main App root
- `views` - Holds all components that are only used once ( if it's on every page it goes here. )
	- Each of the components will be present at all times and we are want to avoid re-rendering big parts of the dom.
- `util` - Utitlity classes
- `styles` - These are general global styles
- `store` - Vuex store
- `router` - The router
- `components` - These are sub components and are reused in multiple primary views.
- `api` - The API for the server and pre-rendering.

## Adding an NPM Module
- Add the module to `package.json`
- Take docker down `crtl+c` and `docker-compose down`
- Run `docker-compose build builder`
- Run `docker-compose up`

## Server Side
For the SSR we have a JSON file that is cached in production coming from our CMS. On initial load after a deployment is run the server will cache the data from this JSON file and use to render pages serverside before the app initializes.

Our store and app state are already setup when the site renders and Vue takes over on the frontend. You can see more of this in the following areas:
- `src/api/index.js`
	- Fetches the data from s3 and returns as a promise.
- `src/store/actions.js:10`
	- Makes the call to api index to fetch data and commits to the store.
- `src/store/mutations.js:11`
	- Makes the change to the store from `actions.js`
- `src/entry-server.js`
	- Calles `ssrInit()` on components listed in the routes which initializes on the serverside.
	- This is where the initial fetch projects is called from.
