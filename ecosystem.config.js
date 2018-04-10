module.exports = {
  apps: [{
    name: 'bot',
    script: './dist/index.js',
    env: {
      NODE_ENV: 'production',
      BOT_TOKEN: '',
    },
    watch: true,
    instances: 1,
  }],
};
