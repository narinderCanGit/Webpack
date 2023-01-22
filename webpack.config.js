const path=require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './app/index.js',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.svg$/,
            use: 'svg-inline-loader'
            }
        ],
      },
      output:{
        path: path.resolve(__dirname,'dist'),
        filename: "main.js"
      },

      plugins: [new HtmlWebpackPlugin()],

      mode: process.env.NODE_ENV==="production" ?"production" :"development"
}