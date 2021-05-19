const base = require('./webpack.config')
//node模块导出定义
module.exports = Object.assign({}, base, {
    //生产环境
    mode: 'production',
    // 外部的库，告诉webpack下面这两个是外部的，不用打包
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    },
})