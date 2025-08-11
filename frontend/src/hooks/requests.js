const API_URL = "http://localhost:8000";
async function httpGetPlanets() {
  // Load planets and return as JSON.
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  // Load launches, sort by flight number, and return as JSON.
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {}

// Delete launch with given ID.
async function httpAbortLaunch(id) {}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
