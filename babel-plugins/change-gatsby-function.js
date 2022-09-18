const https = require('https')
const url = "https://jsonplaceholder.typicode.com/todos/1"

async function handler() {
 

  let data = '';
  https.get(url, res => {
    
    res.on('data', chunk => {
      data += chunk;
    });
    res.on('end', () => {
      data = JSON.parse(data);
      console.log(data);
    })
  }).on('error', err => {
    console.log(err.message);
  })

  return data;
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
        if (path.parent.callee === undefined) {
          return;
        }
        if (path.parent.callee.name === "useGet") {
          return functionCaller();
        }
      },
    },
  };
};
