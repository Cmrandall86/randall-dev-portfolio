const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = {
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    }
  }