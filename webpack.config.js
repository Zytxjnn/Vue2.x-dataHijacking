const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
console.log(path.resolve(__dirname,'vue'))
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devtool: 'source-map',
    resolve: {
        modules:[path.resolve(__dirname,''),path.resolve(__dirname,'node_modules')]
    },
    plugins:[
        new htmlPlugin({
          template:path.resolve(__dirname,'public/index.html')
        })
    ]
}