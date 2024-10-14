const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);

  }
  return json.data;
}

/*NOTE: Slugs are only unique identifiers for non-hierarchical post-types. Hierarchical post types cannot query single nodes by slug as there can be many items with the same slug. Fore example, you could have /company/about and /products/about both as Pages with an about slug.*/
export async function getSinglePostBySlug(slug) {

  const data = await fetchAPI(`
        query GetPostBySlug($slug: ID!) {
            post(id: $slug, idType: SLUG) {
                id
                title
                content
                slug
                date
                modified
                readingTime
                uri
                excerpt(format: RAW)
                author {
                  node {
                    name
                    firstName
                    lastName
                    avatar {
                      url
                    }
                  }
                }
                featuredImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
            }
        }`, {
    variables: { slug }
  })


  return data?.post
}

export async function getAllPrivatePost() {
  const data = await fetchAPI(
    `query MyQuery3 {
      posts(first: 10, where: {status: PRIVATE}) {
      edges {
          node {
            id
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }`
  )
  return data?.posts || [];
}

export async function getAllPosts() {

  const env = process.env.ENV;
  var allPosts;
  var publishedPosts = await fetchAPI(queryGetPublishedPosts);

  if (env === "DEV") {
    const privatePosts = await fetchAPI(queryGetPrivatePosts);
    allPosts = [...publishedPosts?.posts.edges, ...privatePosts?.posts.edges];
  }

  return env === "DEV" ? allPosts : publishedPosts?.posts?.edges || [];
}

export const queryGetPrivatePosts =
  `query MyQuery3 {
      posts(first: 10, where: {status: PRIVATE}) {
      edges {
          node {
            id
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }`;

export const queryGetPublishedPosts =
  `
      query AllPosts {
        posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              id
              title
              excerpt
              slug
              date
              featuredImage {
                node {
                  sourceUrl
                }
              }
              author {
                node {
                  name
                  firstName
                  lastName
                  avatar {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `;