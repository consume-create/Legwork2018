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
