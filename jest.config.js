module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.js'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov', 'cobertura'],
    moduleNameMapper: {
        '\.s?css$': 'identity-obj-proxy'
    },
    setupFiles: [
        '<rootDir>/test/utils/jest-init'
    ]
};
