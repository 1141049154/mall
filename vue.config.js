module.exports = {
    devServer: {
        host: '0.0.0.0',
        public: '172.20.10.2:8080',//该网络地址为你联网的ip地址
        port: 8080,
        https: false,
        hotOnly: false,
        disableHostCheck: true,
    },
}