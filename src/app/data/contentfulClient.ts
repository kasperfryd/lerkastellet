import * as contentful from "contentful";
const contentfulClient = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_API_KEY,
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
export { contentfulClient };
