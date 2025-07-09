export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true, // Ensure CORS is enabled
      headers: '*', // Allow all standard headers
      // Define origins allowed to access your Strapi API
      origin: [
          process.env.TEST_URL || process.env.FRONTEND_URL || 'http://localhost:3000', // Your Vercel frontend URL
          'http://localhost:1337', // Strapi admin panel origin (optional but good)
          // Add any other origins that need access (e.g., staging frontend)
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'], // Allowed methods
      keepHeaderOnError: true,
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
