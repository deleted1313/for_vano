module.exports = {
  pwa: {
    name: 'MyApp',
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/for_vano/'
    : '/',
};

