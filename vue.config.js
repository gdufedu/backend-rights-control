module.exports = {
    devServer: {
        before: require('./mock/index.js') // 引入mock/index.js
    },
    lintOnSave: false
}