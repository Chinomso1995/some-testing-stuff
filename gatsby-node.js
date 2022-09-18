
const path = require("path")

exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPlugin(
    {
      name: path.resolve('./babel-plugins/change-return.js'),
      options: {}
    },
    {
        name: path.resolve('./babel-plugins/change-gatsby-function.js'),
        options: {}
      },
    )
  }



