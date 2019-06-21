// all rules details check: https://github.com/wcandillon/eslint-config-react-native-wcandillon/blob/master/index.js
module.exports = {
  extends: 'react-native-wcandillon',
  rules: {
    'react-native/no-color-literals': 0,
    'import/no-extraneous-dependencies': 2,
    quotes: [2, 'single', { avoidEscape: true }],
    // tmp, rm it when use typescript
    'react/jsx-filename-extension': 0,
  },
}
