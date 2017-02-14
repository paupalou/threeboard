import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'js/board.js',
  plugins: [json(), babel(), nodeResolve(), uglify()],
  format: 'es',
  dest: 'public/bundle.js'
};
