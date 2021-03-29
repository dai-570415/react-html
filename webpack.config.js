require('@babel/register'); // development.jsでES6を使えるようにする

const path = require('path')

const src  = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
//  mode: "production",

    entry: {
      header: src + '/header.jsx',
      footer: src + '/footer.jsx',
    },

    output: {
        path: dist,
        filename: '[name].bundle.js'
    },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
            {
              loader: "babel-loader", // Babel を利用する
              options: { // Babel のオプションを指定する
                presets: [
                  "@babel/preset-env", // プリセットを指定することで、ES2020 を ES5 に変換
                  "@babel/react" // React の JSX を解釈
                ]
              }
            }
          ]        
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: []
}