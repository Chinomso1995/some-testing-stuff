

function handler(req, res) {
    //res.status(200).json({ hello: `world` })
}

function functionCaller() {
  handler();
}

module.exports = function (babel) {
  const { types: t } = babel;

  return {
    name: "change-gatsby-function", // not required
    visitor: {
      ArrowFunctionExpression(path) {
       
        if(path.parent.callee === undefined) {
            return
        }
        if ( path.parent.callee.name === "useGet") {
          return functionCaller();
        }
      },
    },
  };
}
