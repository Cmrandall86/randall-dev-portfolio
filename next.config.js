/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./styles', './components'],
  },
}

module.exports = nextConfig

module.exports = {
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    }
  }