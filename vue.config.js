// run proxy for devServer only not for production
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
