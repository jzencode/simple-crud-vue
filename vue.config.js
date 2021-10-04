// run proxy for devServer only not for production
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000/api',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
