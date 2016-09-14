export default function ({types: t}) {
  return {
    visitor: {
      ClassDeclaration(path, state) {
        if (
          path.node.superClass &&
          (
            path.node.superClass.name === 'Component' ||
            (
              path.node.superClass.object &&
              path.node.superClass.object.name === 'React' &&
              path.node.superClass.property.name === 'Component'
              )
            )
          ) 
        {
          let targetPath = path;

          if (t.isExportNamedDeclaration(path.parentPath.node) || t.isExportDefaultDeclaration(path.parentPath.node)) {
            targetPath = path.parentPath;
          }

          let modulePath = state.file.opts.filename;
          
          if (state.opts.stripExtension === true) {
            modulePath = modulePath.replace(/\.[^.]+$/i, '');
          }

          if (state.opts.stripCwd === true) {
            let cwd = process.cwd();
            modulePath = modulePath.indexOf(cwd) !== -1 ? modulePath.replace(cwd, '') : modulePath;
          }
          
          targetPath.insertAfter([
            t.expressionStatement(
              t.assignmentExpression(
                '=',
                t.memberExpression(path.node.id, t.identifier('modulePath')),
                t.stringLiteral(modulePath)
              )
            )
          ]);
        }
      }
    }
  };
}