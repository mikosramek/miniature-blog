module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options : {
            svgoConfig: {
              plugins: [
                {
                  removeDimensions: true,
                  addAttributesToSVGElement: {
                    attributes: [
                      {
                        preserveAspectRatio: "xMidYMid meet",
                      },
                    ],
                  },
                },
              ],
            },
          }
        }
      ]
    });

    return config;
  }
};
