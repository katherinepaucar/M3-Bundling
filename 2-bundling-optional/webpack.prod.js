import {merge} from 'webpack-merge';
import Dotenv from 'dotenv-webpack'
import common from './webpack.common.js';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default merge(common, {
    mode: "production",
    output:{
        filename: "js/[name].[chunkhash].js",
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true
    },
    module: {
        rules: [ // LOADER 
          {
              test: /\.scss$/,
              exclude: /node_modules/,
              use: [MiniCssExtractPlugin.loader, 
                  {
                      loader:"css-loader",
                      options: {
                          modules: {
                              exportLocalsConvention:"camelCase",
                              localIdentName:  "[path][name]__[local]--[hash:base64:5]",
                          }
                      }
  
                  }, 
                  "sass-loader"]
          },
  
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash].css",
            chunkFilename: "[id].css",
          }),
        new Dotenv({
            path: "./environment/prod.env"
        })
      ],
});