module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "amd": true,
  },
  // "parserOptions": {
  //   "ecmaVersion": 6
  // },
  "extends": [
    'eslint:recommended'
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}