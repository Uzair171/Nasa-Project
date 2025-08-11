const { planets } = require("../../models/planets.model.js");

function getallPlanets(req, res) {
  return res.status(200).json(planets);
}

module.exports = {
  getallPlanets,
};
