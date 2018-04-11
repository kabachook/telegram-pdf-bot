module.exports = {
    "extends": "airbnb-base",
    "parser": "babel-eslint",
    "plugins": [
        "import",
        "mocha"
    ],
    "rules": {
        "linebreak-style": "off",
        "no-console": "off",
        "no-useless-escape": "off"
    },
    "env": {
        "node": true,
        "mocha": true,
    }
};