const rootDir = '<rootDir>/src'

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: [`${rootDir}/setupTests.ts`],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      require.resolve('./src/tests/file-mock.js'),
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
}
