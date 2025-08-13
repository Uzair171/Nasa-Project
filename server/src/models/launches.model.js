const launches = new Map();
let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Apollo 11",
  rocket: "Saturn V",
  launchDate: new Date("2030-12-21"),
  destination: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  const newLaunch = Object.assign({}, launch, {
    success: true,
    upcoming: true,
    customers: ["ZTM", "NASA"],
    flightNumber: latestFlightNumber,
  });
  launches.set(latestFlightNumber, newLaunch);
  return newLaunch; // <-- return the full object with defaults
}

module.exports = { getAllLaunches, addNewLaunch };
