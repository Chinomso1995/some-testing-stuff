const path = require("path")

module.exports = {
  presets: [
    [
      "babel-preset-gatsby",
      
      {
        "targets": {
          "browsers": [">0.25%", "not dead"]
        }
      }
    ],
   
  ],
  plugins: [
    path.resolve("./babel-plugins/change-return.js"),
    path.resolve("./babel-plugins/change-gatsby-function.js"),
  
  ],
}
