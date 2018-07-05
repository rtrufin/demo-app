const authRoutes = require('./auth_routes');
module.exports = function(app, data) {
  authRoutes(app, data);
  // Other route groups could go here, in the future
};