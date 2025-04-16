module.exports = ({ env }) => ({
  url: env('STRAPI_EXTERNAL_URL'), // Render sets this based on service name
  app: {
    keys: env.array('APP_KEYS'), // Use production keys set in Render Env Vars
  },
   webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
