module.exports = {
  entry: "./react-app/index.jsx",
  output:{
    path: "public/dist",
    filename: "bundle.js"
  },
  resolve:{
    extensions: ["", ".js", ".jsx"]
  },
  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: ["babel-loader"],
        query:{
          presets:["es2015", "react"]
        }
      }
    ]
  }
}
