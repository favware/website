const copy = require('copy-dir');
const del = require('del');

const run = () => {
  const angular_source = '../dist';
  const firebase_source = './dist';

  del.sync(firebase_source)
  copy.sync(angular_source, firebase_source);
}

run();