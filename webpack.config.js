const webpack = require('webpack')

const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    main_css: './src/s1.sass',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Index',
      filename: 'index.html',
      template: 'src/welcome.pug',
      files: {
        css: ['[name].[chunkhash].css'],
        chunks: {
          head: {
            entry: '',
            css: '[name].[chunkhash].css',
          }
        }
      }
      // template: 'src/welcome.html',
      // inject: false,
      // template: require('html-webpack-template'),
      // appMountId: 'app',
      // // appMountHtmlSnippet: '<div class="app-spinner"><i class="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i></div>',
      // appMountHtmlSnippet: 'src/welcome.pug',
      // headHtmlSnippet: '<style>div.app-spinner {position: fixed;top:50%;left:50%;}</style >',
      // bodyHtmlSnippet: '<custom-element></custom-element>',
      // // baseHref: 'http://example.com/awesome',
      // // devServer: 'http://localhost:8008',
      // googleAnalytics: {
      //   trackingId: 'UA-XXXX-XX',
      //   pageViewOnLoad: true
      // },
      // meta: [
      //   {
      //     name: 'description',
      //     content: 'A better default template for html-webpack-plugin.'
      //   }
      // ],
      // mobile: true,
      // lang: 'en-US',
      // links: [
      //   'https://fonts.googleapis.com/css?family=Roboto',
      //   // {
      //   //   href: '/apple-touch-icon.png',
      //   //   rel: 'apple-touch-icon',
      //   //   sizes: '180x180'
      //   // },
      //   // {
      //   //   href: '/favicon-32x32.png',
      //   //   rel: 'icon',
      //   //   sizes: '32x32',
      //   //   type: 'image/png'
      //   // }
      // ],
      // inlineManifestWebpackName: 'webpackManifest',
      // scripts: [
      //   // 'http://example.com/somescript.js',
      //   // {
      //   //   src: 'index.js',
      //   //   type: 'module'
      //   // }
      // ],
      // title: 'My App',
      // window: {
      //   env: {
      //     apiHost: 'http://myapi.com/api/v1'
      //   }
      // }
    }),
    // new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].[chunkhash].[ext]',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: [
          'pug-loader'
        ]
      },
    ]
  }
} 