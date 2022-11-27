const jestConfig = {
    verbose: true,
    'transform': {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/tests/*.js?(x)'],
}

module.exports = jestConfig
