module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'), // Use the variable set in Render secrets
  },
  apiToken: {
    // Paste the salt generated in Step 1 here
    salt: env('API_TOKEN_SALT'), // Use env var OR paste directly
  },
  transfer: {
    token: {
       // Generate another salt for transfer tokens if you plan to use data import/export
       // It should be different from the apiToken salt
       salt: env('TRANSFER_TOKEN_SALT'),
    }
  },
   // Optional: Add flags if needed, check Strapi admin panel settings docs
   flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
