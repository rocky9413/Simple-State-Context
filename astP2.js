// All module exports will always start off as a single 'FunctionDeclaration' type
while (Object.hasOwnProperty.call(ast, 'body')) {
  // Traverse down .body once before invoking parsing logic and will loop through any .body after
  ast = ast.body[0].expression.body.body;

  const statements = [];
  // Traverse through the function's funcDecs and Expression Statements
  ast.forEach(program => {
    // Hook Declarations will only be under 'VariableDeclaration' type
    if (program.type === 'VariableDeclaration') {
      program.declarations.forEach(dec => {
        statements.push(dec.id.name);
      });
    }
  });
  // Iterate through the array and determine getter/setters based on pattern
  for (let i = 0; i < statements.length; i += 1) {
    if (statements[i].match(/_use/)) {
      hookState[statements[i]] = statements[i + 2];
    }
  }
  // });
}
