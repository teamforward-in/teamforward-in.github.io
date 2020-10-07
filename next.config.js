module.exports = {
    env: {
        db_host: 'localhost',
        db_user: 'root',
        db_password: 'password',
        db_database: 'restaurentapp',
        db_connectionLimit: 100,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: '/_next/static/',
            outputPath: 'static/',
            name: '[name].[ext]',
          },
        },
      })
      return config
    },
  }