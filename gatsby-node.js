const path = require('path');

exports.createPages = async ({ graphql, actions, getNodesByType }) => {
    const { createPage } = actions;
  
    const allPosts = await graphql(`
        {
            allPostsJson {
              nodes {
                  id
                  slug
                  imageFileName
              }
            }
        }
      `);
  
    
      allPosts.data.allPostsJson.nodes.map(async (node) => {
      createPage({
        path: node.slug,
        component: path.resolve('./src/templates/BlogPost.js'),
        context: {
          id: node.id,
          imageFileName: node.imageFileName,
        },
      });
    });
  };