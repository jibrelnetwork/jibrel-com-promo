module.exports = {
  routes: [
    '/en',
    '/en/founder',
    '/en/investor',
    '/ar',
    '/ar/founder',
    '/ar/investor',
    '/zh-hans',
    '/zh-hans/founder',
    '/zh-hans/investor',
    '/ko',
    '/ko/founder',
    '/ko/investor',
  ],
  rendererConfig: {
    executablePath: process.env.PUPPETEER_CHROMIUM_EXECUTABLE_PATH || undefined,
  },
}
