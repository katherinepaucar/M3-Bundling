import HtmlWebpackPlugin from "html-webpack-plugin"; // a partir de node 18
import path from "node:path";
import url from "node:url";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
export default {
    context: path.resolve(__dirname, "src"),
    resolve:{
        extensions: [".js", ".ts",".tsx"]
    },
    entry: {
        app: "./index.tsx"
    },
    output:{
        filename: "[name].[chunkhash].js",
        clean: true
    },
    module: {
      rules: [ // LOADER 
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
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
    plugins: [
        new HtmlWebpackPlugin({
          template: "./index.html",
          filename: "index.html",
          scriptLoading: "blocking",
        })
      ],
  };
  