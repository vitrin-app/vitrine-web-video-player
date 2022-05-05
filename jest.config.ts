export default {
  preset: 'ts-jest',
  verbose: true,
  clearMocks: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  setupFiles: [
    './src/test/setup/mock-html-media-element.js',
    './src/test/setup/mock-use-video.js',
  ]
}
