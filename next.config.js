/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./styles', './components'],
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.forEach((rule) => {
      const { oneOf } = rule;
      if (!oneOf) return;
      oneOf.forEach((one) => {
        if (!Array.isArray(one.use)) return;
        one.use = one.use.filter((loader) => {
          if (typeof loader !== 'object' || !loader.loader) return true;
          return !loader.loader.includes('resolve-url-loader');
        });
      });
    });
    return config;
  },
}

module.exports = nextConfig