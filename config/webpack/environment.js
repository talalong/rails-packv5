const { environment } = require('@rails/webpacker')
console.log("--------")

const coffee = {
    test: /\.coffee$/,
    use: ["babel-loader", "coffee-loader"]
}

environment.loaders.append('coffee', coffee)

environment.loaders.delete('nodeModules')

module.exports = environment
