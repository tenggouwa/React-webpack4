const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCSS = require('purifycss-webpack')
const HappyPack = require('happypack')
const glob = require('glob-all')

module.exports = {
  mode: 'productioin',
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extension: ["", ".js", ".jsx"],
    alias: {
      "@": path.join(__dirname, "src"),
      pages: path.join(__dirname, "src/pages"),
      router: path.join(__dirname, "src/router")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "happypack/loader?id=Tenggouwa"
          }
        ]
      },
      {
        test: /\.scss?$/,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader", // 创建style标签，并将css添加进去
          "css-loader", // 编译css
          "postcss-loader",
          "sass-loader" // 编译scss
        ]
      },
      {
          test: /\.(png|jpg|jpeg|gif|svg)/,
          use: {
            loader: 'url-loader',
            options: {
              outputPath: 'images/', // 图片输出的路径
              limit: 10 * 1024
            }
          }
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].min.[ext]',
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              publicPath: 'fonts/',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ],
    devtool:"cheap-module-eval-source-map",// 开发环境配置
    devtool:"cheap-module-source-map",   // 线上生成配置
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 最终创建的文件名
      template: path.join(__dirname, './template.html') // 指定模板路径
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // 清除无用 css
    new PurifyCSS({
      paths: glob.sync([
        // 要做 CSS Tree Shaking 的路径文件
        path.resolve(__dirname, './src/*.html'), // 请注意，我们同样需要对 html 文件进行 tree shaking
        path.resolve(__dirname, './src/*.js')
      ])
    }),
    new HappyPack({
      // 用唯一的标识符id，来代表当前的HappyPack是用来处理一类特定的文件
      id:'Tenggouwa',
      // 如何处理.js文件，用法和Loader配置中一样
      loaders:['babel-loader?cacheDirectory'],
      threadPool: HappyPackThreadPool,
    })
  ],
  optimization: {
    usedExports:true,
    splitChunks: {
      chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
    },
  },
  devServer: {}
}