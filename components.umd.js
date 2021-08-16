(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MyComponent = factory(global.Vue));
}(this, (function (vue) { 'use strict';

  var script = {
    name: "Tab1"
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", null, " Tab1 "))
  }

  script.render = render;
  script.__file = "src/Tab1/Tab1.vue";

  return script;

})));
