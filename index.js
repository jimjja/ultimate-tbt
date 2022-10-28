const squadsData = require("./data/squads.json");
const themesData = require("./data/themes.json");

function print(data) {
  console.log(JSON.stringify(data, null, 2));
}

(function init() {
  print("Hello World!");
})();
