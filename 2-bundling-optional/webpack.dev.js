
import {merge} from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
    mode:"development",
    module: {
      rules: [ // LOADER 
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 
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
    devtool: "eval-source-map",
    devServer:{
        devMiddleware: {
            stats: "errors-only"
        }
    }
  });
  