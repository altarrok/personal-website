const path = require('path');

exports.createPages = async ({ graphql, actions, getNodesByType }) => {
    const { createPage } = actions;
  
    const allPosts = await graphql(`
        {
            allPostsJson {
              edges {
                node {
                  id
                  slug
                  imageFileName
                }
              }
            }
        }
      `);
  
    
      allPosts.data.allPostsJson.edges.map(async (edge) => {
      createPage({
        path: edge.node.slug,
        component: path.resolve('./src/templates/BlogPost.js'),
        context: {
          id: edge.node.id,
          imageFileName: edge.node.imageFileName,
        },
      });
    });
  };