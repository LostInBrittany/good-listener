// rollup.config.js
export default [
  {
    input: 'src/listen.js',
    output: {
      file: 'cjs/listen.js',
      format: 'cjs',
      name: 'select'
    },
  },
  {
    input: 'src/is.js',
    output: {
      file: 'cjs/is.js',
      format: 'cjs',
      name: 'select'
    },
    
  },
];