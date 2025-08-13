const {
  getAllLaunches,
  addNewLaunch,
} = require("../../models/launches.model.js");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);

  const newLaunch = addNewLaunch(launch); // <-- capture returned object
  return res.status(201).json(newLaunch); // <-- send full launch including defaults
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch };
