# legwork2018

> The Legwork 2018 Site

## Build Setup

``` bash
## Start Docker
docker-compose up
```

## Under the hood
We are using Server Side Rendering and prefetching all data to ensure speedy delivery of the site and content.

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

On top of SSR we have implemented http2 for all network requests which reduces the number of HTTP requests and bumps overall speed of the app.

The environments are all the same as Docker:
- Ubuntu NodeJS 6.11.2 on 16.04
- Nginx

## Deployments
For deployments we are using capistrano. This allows us to build the app on the server at deploy. Also allows us to set our deployment target `staging` or `production`.

To deploy you must have your ssh key added to the server otherwise you will be denied access.

- staging:
	- run `cap staging deploy` ( full deploy )
	- run `cap staging deploy:refresh` ( clear memory on the server )
- production
	- run `cap production deploy` ( full deploy )
	- run `cap staging deploy:refresh` ( clear memory on the server )

## Render Loop
There is one primary renderer in the app. This acts as a central source of truth for memory leaks that may happen and also allows us to toggle which components are rendering when and where.

To add a component to the renderer call: `this.$store.dispatch('ADD_COMPONENT_TO_RENDER_QUEUE', this);`

To remove a component from the renderer call: `this.$store.dispatch('REMOVE_COMONENT_FROM_RENDER_QUEUE', this);`

Something to ensure that a component is out of the renderer is to always have the `beforeDestroy` call the `REMOVE_COMONENT_FROM_RENDER_QUEUE` dispatch.



