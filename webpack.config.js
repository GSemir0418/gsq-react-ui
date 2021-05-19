const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')
//node模块导出定义
module.exports = {
    //生产环境
    mode: 'production',
    //入口
    entry: {
        index: './lib/index.tsx'
    },
    //输出的配置
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        //输出库的名字
        library: 'gsq-react-ui',
        //输出库的格式，封装成什么样的模块定义
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,//如果是以.tsx或.ts结尾的，就用下面的loader翻译成js文件
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        //按照模板生成html文件，并把编译后的js自动写入html文件中
        new HtmlWebpackPlugin({
            title: 'gsq-react-ui',
            template: 'index.html'
        })
    ]
}