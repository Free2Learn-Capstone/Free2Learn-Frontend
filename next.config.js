const path = require('path');

module.exports = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.alias['next/app'] = path.resolve('./src/app/_app.js');
      }
  
      return config;
    },
  };
  