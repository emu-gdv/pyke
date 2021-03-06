const path = require("path");

const config = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  target: "web",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: false
              }
            }
          }
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png"
            }
          }
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/jpg"
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: "file-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
        ],
        include: /\.module\.css$/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  // Workaround
  node: {
    fs: "empty"
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true
  }
};

module.exports = config;
