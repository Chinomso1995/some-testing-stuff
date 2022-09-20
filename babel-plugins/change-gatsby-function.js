


module.exports = function (babel) {
  const { types: t, template } = babel;
  
  const functionExpression = template.statement.ast(`async () =>  {
 
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();
    
    return result
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