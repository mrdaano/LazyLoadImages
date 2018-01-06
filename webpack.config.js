const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'example'),
    devServer: {
        contentBase: path.join(__dirname, 'example'),
        compress: true,
        port: 8080
    }
}