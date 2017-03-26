module.exports = {
  apps: [
    {
      name: 'mock',
      script: './src/mock.js',
      env: {
        'NODE_ENV': 'staging'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
