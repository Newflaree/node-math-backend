const { validateFields } = require("./validate-fields.middleware");
const { validateJWT } = require("./validate-jwt.middleware");
const { validateRole } = require("./validate-role.middleware");

module.exports = {
  validateFields,
  validateJWT,
  validateRole
}
