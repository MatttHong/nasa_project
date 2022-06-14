const { planets } = require('../../models/planets.model');

async function getAllPlanets(req, res) {
  return res.json(planets);
}

module.exports = {
  getAllPlanets,
};