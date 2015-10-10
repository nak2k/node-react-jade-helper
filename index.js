var reactJade = require('react-jade');
var staticModule = require('static-module');
var path = require('path');

module.exports = transform;

function transform(file) {
  var modules = {
    "react-jade": {
      "compileFile": compileFile,
    },
  };
  var vars = {
    __dirname: path.dirname(file)
  };
  var sm = staticModule(modules, {vars: vars});
  return sm;

  function compileFile(file, localOptions) {
    sm.emit('file', file);
    return reactJade.compileFile(file, localOptions);
  }
}
