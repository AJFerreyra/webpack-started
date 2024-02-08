const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');



module.exports = {
  mode: 'development',
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          
        }
      },
     {
        test: /\.css$/,
        exclude: /styles\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /styles\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {minimize: false}
      },
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin ({
      filename: '[name].css',
      ignoreOrder: false
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets/' },
      ]
    }),
  ]
};

