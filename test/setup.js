import jsdom from 'jsdom';

if (typeof document === 'undefined') {
  global.document = jsdom.jsdom('<!doctype html><html><body><div class="container todo-container"><div id="app"></div></div></body></html>');
  global.window = document.defaultView;
  global.navigator = global.window.navigator;
}
