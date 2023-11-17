import HtmlWebpackPlugin from "html-webpack-plugin"; // a partir de node 18
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "node:path";
import url from "node:url";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
export default {
    context: path.resolve(__dirname, "src"),
    resolve:{
        extensions: [".js", ".jsx"]
    },
    entry: {
        app: "./index.jsx"
    },
    output:{
        filename: "[name].[chunkhash].js",
        clean: true
    },
    module: {
      rules: [ // LOADER 
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
            test: /\.css$/,
            exclude: /node_modules/, //Incluir en caso de instalar boostrap
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
            test: /\.png|jpg|jpeg$/,
            type:"asset/resource"
            
        },
        {
            test: /\.html$/,
            loader: "html-loader", // imágenes en html
        }

      ],
    },
    devtool: "eval-source-map",
    devServer:{
        devMiddleware: {
            stats: "errors-only"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./index.html",
          filename: "index.html",
          scriptLoading: "blocking",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css",
          }),
      ],
  };
  