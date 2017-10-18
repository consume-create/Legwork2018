import "contentful" from "contentful";

export function createAPI ({ SPACE_ID, ACCESS_TOKEN }) {
	const client = contentful.createClient({
	  space: SPACE_ID,
	  accessToken: ACCESS_TOKEN
	});
	return client;
}
