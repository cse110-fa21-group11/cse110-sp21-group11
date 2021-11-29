const path = require("path");

module.exports = {
    entry: {
        "main.js": [
            path.resolve(__dirname, "main.js"),
        ],
        "recipecard.js": [
            path.resolve(__dirname, "recipecard/card.js"),
            path.resolve(__dirname, "recipecard/cardCarousel.js"),
            path.resolve(__dirname, "recipecard/cardExpand.js"),
        ]
    },
    output: {
        filename: "[name]",
        path: path.resolve(__dirname, "../source/public")
    }
};