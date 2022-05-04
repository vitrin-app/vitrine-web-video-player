export default {
  preset: 'ts-jest',
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
