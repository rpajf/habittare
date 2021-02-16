const withCSS = require("@zeit/next-css");

// default Config
// module.exports = withCSS({});


// Custom Config
module.exports = withCSS({
  cssModules: true
})


module.exports = {
  env: {
    REACT_APP_MAPBOX_TOKEN: process.env.REACT_APP_MAPBOX_TOKEN
  }
}
