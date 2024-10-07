const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables } = {}) {
    const headers = { "Content-Type": "application/json" };

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


export async function getPreviewPost(id, idType = "DATABASE_ID") {
    const data = await fetchAPI(
        `
      query PreviewPost($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          databaseId
          slug
          status
        }
      }`,
        {
            variables: { id, idType },
        },
    );
    return data?.post;
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


export async function getAllPostsForHome(preview) {
    const data = await fetchAPI(
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
    `,
        {
            variables: {
                onlyEnabled: !preview,
                preview,
            },
        },
    );
    return data?.posts || [];
}