require('@babel/register')({
  "presets": [
    "@babel/preset-react",
    "@babel/preset-env"
  ],
  "plugins": [
    "react-hot-loader/babel",
    [
      "css-modules-transform", {
      "generateScopedName": "[name]__[local]__[hash:base64:5]"
    }
    ]
  ]
});
require('./server');