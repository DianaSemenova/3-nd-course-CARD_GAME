module.exports = {
    entry: "./index.js",
    module: {
        rules: [
          { test: /\.scss$/, use: [ 'style-loader', 'scss-loader' ] },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
          },
        ]
      },

    output: {
        filename: "main.js",
    },
};
