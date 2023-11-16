import HtmlWebpackPlugin from "html-webpack-plugin"; // a partir de node 18
export default {
    entry: ["./src/index.js"],
    module: {
      rules: [ // LOADER 
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html",
          scriptLoading: "blocking",
          hash: true,
        }),
      ],
  };
  