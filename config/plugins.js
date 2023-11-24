// {
//   name: 'strapi-provider-upload',
//   config: {
//     provider: 'local',
//     local: {
//       uploadDir: '/uploads',
//       baseUrl: 'https://strapi.nikospap.blog/uploads',
//     },
//   },
// },

module.exports = () => ({
  name: 'strapi-provider-upload',
  config: {
    provider: 'local',
    local: {
      uploadDir: '/uploads',
      baseUrl: 'https://strapi.nikospap.blog/uploads',
    },
  },
})