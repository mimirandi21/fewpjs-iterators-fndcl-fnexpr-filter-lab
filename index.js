let matchingDrivers = [];
function findMatching(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toUpperCase() === name.toUpperCase();
  });
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(function (driver) {
    return driver.charAt(0) === str.charAt(0);
  });
}

function matchName(drivers, str) {
  return drivers.filter(function (driver) {
    return driver.name === str;
  });
}
