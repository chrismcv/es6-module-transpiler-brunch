// Generated by CoffeeScript 1.9.0
var Compiler, ES6ModuleTranspiler;

Compiler = require('es6-module-transpiler').Compiler;

module.exports = ES6ModuleTranspiler = (function() {
  ES6ModuleTranspiler.prototype.brunchPlugin = true;

  ES6ModuleTranspiler.prototype.type = 'javascript';

  ES6ModuleTranspiler.prototype.extension = 'js';

  function ES6ModuleTranspiler(config) {
    var _ref, _ref1;
    this.debug = ((config != null ? (_ref = config.es6ModuleTranspiler) != null ? _ref.debug : void 0 : void 0) != null) || false;
    this.match = new RegExp((config != null ? (_ref1 = config.es6ModuleTranspiler) != null ? _ref1.match : void 0 : void 0) || /^app/);
    if (this.debug) {
      console.log('---> es6-matching:', this.match);
    }
  }

  ES6ModuleTranspiler.prototype.compile = function(params, callback) {
    var compiler;
    if (this.match.test(params.path)) {
      if (this.debug) {
        console.log('---> es6-compiling:', params.path);
      }
      compiler = new Compiler(params.data, params.string);
      return callback(null, {
        data: compiler.toCJS()
      });
    } else {
      if (this.debug) {
        console.log('---> es6-ignoring:', params.path);
      }
      return callback(null, {
        data: params.data
      });
    }
  };

  return ES6ModuleTranspiler;

})();
