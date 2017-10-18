// this is aliased in webpack config based on server/client build
import { createAPI } from 'create-api';

const logRequests = !!process.env.DEBUG_API;

const api = createAPI({
	SPACE_ID: process.env.SPACE_ID,
	ACCESS_TOKEN: process.env.ACCESS_TOKEN
});

// warm the front page cache every 15 min
// make sure to do this only once across all requests
if (api.onServer) {
  warmCache();
}

function warmCache () {

}

