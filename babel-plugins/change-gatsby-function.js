
const axios = require('axios')

module.exports = function (babel) {
  const { types: t, template } = babel;
  
  const functionExpression = template.statement.ast(`async (req, res) =>  {
 

    const listofUsers = (await axios.get('https://jsonplaceholder.typicode.com/todos/1')).data;
    return res.json(listOfUsers)
  }`);

  return {
    name: "change-gatsby-function", // not required
    visitor: {
      ArrowFunctionExpression(path) {
        if (path.parent.callee === undefined) {
          return;
        }
        if (path.parent.callee.name === "useGet") {
          path.replaceWith(
            functionExpression
          );
        }
      }
    }
  };
};