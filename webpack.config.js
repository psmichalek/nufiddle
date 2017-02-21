var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
    'bootstrap-loader',
    'font-awesome-loader',
    path.resolve(__dirname, 'src/app')
  ],
  target:'web',
	output:{
    path:path.resolve(__dirname, 'dist'),
    publicPath: '/',
		filename:'bundle.js'
	},
	devServer:{
		contentBase:'./dist',
		compress: true,
		port: 9000
	},
  module:{
    rules:
    [
      { test:/\.css$/, use:[ { loader:'style-loader' }, { loader:'css-loader' } ] }
      ,{ test:/\.scss$/, use:[ { loader:'style-loader' }, { loader:'css-loader' }, { loader:'sass-loader' } ] }
      ,{ test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/,/sources\.js/], query:{ presets:['es2015'] } }
      ,{ test: /\.html$/, loader: 'html-loader', exclude:/index.html/ }
      ,{ test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' }
      ,{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" }
      ,{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
    // For some shortcoming when using Bootstrap 4
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether",
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: "exports-loader?Util!bootstrap/js/dist/util",
    })
]
}
