const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')
//node模块导出定义
module.exports = Object.assign({}, base, {
    //生产环境
    mode: 'development',
    plugins: [
        //按照模板生成html文件，并把编译后的js自动写入html文件中
        new HtmlWebpackPlugin({
            title: 'gsq-react-ui',
            template: 'index.html'
        })
    ],
})