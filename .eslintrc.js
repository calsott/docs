const prettierOptions = require('./.prettierrc.js')

const RULES = {
  OFF: 0,
  WARNING: 1,
  ERROR: 2
}

module.exports = {
  extends: ['next/core-web-vitals', 'next', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [RULES.WARNING, prettierOptions]
  }
}
