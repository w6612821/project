module.exports = {
    devServer:{
        proxy:{
            '/hd':{
                target: 'http://120.55.52.216',
                changeOrigin:true,
                pathReWrite:{'^/':''}
            }
        }
    }
  }