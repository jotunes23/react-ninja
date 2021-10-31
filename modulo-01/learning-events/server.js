const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(3000, err => {
  if (err) {
    return console.log('Erro no WebpackDevServer\n', err)
  }

  console.log('WebpackDevServer executando! http://localhost:3000')
})
