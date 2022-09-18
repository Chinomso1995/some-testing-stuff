function replace(string) {
  return string.replace(/Assert/g, "A****t");
}

module.exports =  function (babel) {
  const { types: t } = babel;

  return {
    name: "change-return-type", // not required
    visitor: {
      ReturnStatement(path) {
        if (
          path?.parentPath?.parentPath?.parent?.callee?.name === "useGet" &&
          path?.node?.argument?.value?.toLowerCase() === "hello"
        ) {
          path.node.argument.value = replace("world");
        }
      },
    },
  };
}
