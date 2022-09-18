exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPlugin({
      name: `change-return-type`,
      options: {}
    },
    {
        name: `change-gatsby-function`,
        options: {}
      },
    )
  }