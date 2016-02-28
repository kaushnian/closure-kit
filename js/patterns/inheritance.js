goog.define('kit.patterns.inheritance');

goog.scope(function() {
  var app = kit.patterns.inheritance;
  /**
   * @param {string} foo
   * @constructor
   */
  app.Parent = function(foo) {
      this.foo = foo;
  };

  /**
   * @type {string}
   */
  app.Parent.prototype.foo;

  /**
   * @param {string} param
   */
  app.Parent.prototype.doSomething = function(param) {
      // ...
  };

  /**
   * @param {string} foo
   * @param {string} bar
   * @constructor
   * @extends {app.Parent}
   */
  app.Child = function(foo, bar) {
      app.Child.base(this, 'constructor', foo); // call parent constructor
      this.bar = bar;
  };

  goog.inherits(app.Child, app.Parent);

  /**
   * @type {string}
   */
  app.Child.prototype.bar;

  /**
   * @override
   */
  app.Child.prototype.doSomething = function(param) {
      app.Child.base(this, 'doSomething', param); // call super doSomething

      // ...
  };
});
