const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('public'),   //path.join(__dirname, 'public')
    filename: 'bundle.js'
  },
}