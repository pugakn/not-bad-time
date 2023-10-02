/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dir, isServer }) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    // Needed for embedding SVGs in React components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      include: [dir],
      exclude: /node_modules/,
      use: [
        {
          loader: "graphql-tag/loader",
        },
      ],
    });

    return config;
  },
  images: {},
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  productionBrowserSourceMaps: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
};

module.exports = nextConfig;
