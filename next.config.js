require("dotenv").config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },

  async redirects() {
    return [
      {
        source: "/posts/Portfolio",
        destination: "https://tanvirshaikh.in",
        permanent: false,
      },
      {
        source: "/posts/ParkIT",
        destination: "https://jolly-roentgen-8c0cb3.netlify.app",
        permanent: false,
      },
      {
        source: "/posts/ShoeFactory",
        destination: "https://hungry-shaw-90971f.netlify.app",
        permanent: false,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
