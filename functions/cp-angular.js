const copy = require('copy-dir');
const del = require('del');

(() => {
  const angular_source = '../dist';
  const firebase_source = './dist';
  const functions_build = './lib';

  del.sync(functions_build);
  del.sync(firebase_source);
  copy.sync(angular_source, firebase_source);
})();