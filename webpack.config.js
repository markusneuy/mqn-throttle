module.exports = {
     entry: './src/index.js',
     output: {
         path: './dst/',
         filename: 'index.bundle.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
 };