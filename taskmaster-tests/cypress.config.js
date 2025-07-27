const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Configuración base de la aplicación
    baseUrl: 'http://localhost:3000',
    
    // Configuración de viewport por defecto
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Configuración de timeouts
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    // Configuración de videos y screenshots
    video: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    
    // Configuración de retry
    retries: {
      runMode: 2,
      openMode: 0
    },
    
    // Configuración de reporter
    reporter: 'spec',
    
    // Configuración de archivos
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    
    // Configuración de fixtures
    fixturesFolder: 'cypress/fixtures',
    
    // Configuración de downloads
    downloadsFolder: 'cypress/downloads',
    
    // Configuración de videos
    videosFolder: 'cypress/videos',
    
    // Configuración de screenshots
    screenshotsFolder: 'cypress/screenshots',
    
    // Configuración de Chrome
    chromeWebSecurity: false,
    
    // Configuración de scroll behavior
    scrollBehavior: 'center',
    
    // Configuración de animaciones
    waitForAnimations: true,
    
    // Configuración de logs
    logLevel: 'info',
    
    // Configuración de setup y teardown
    setupNodeEvents(on, config) {
      // Configuración de eventos de nodo
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
        table(message) {
          console.table(message)
          return null
        }
      })
      
      // Configuración de eventos de navegador
      on('before:browser:launch', (browser = {}, launchOptions) => {
        // Configuraciones específicas del navegador
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--disable-gpu')
          launchOptions.args.push('--no-sandbox')
          launchOptions.args.push('--disable-dev-shm-usage')
        }
        
        return launchOptions
      })
      
      // Configuración de eventos de test
      on('after:run', async (results) => {
        // Lógica post-ejecución
        console.log('Tests completados:', results.totalTests, 'tests')
        console.log('Tests pasados:', results.totalPassed, 'tests')
        console.log('Tests fallidos:', results.totalFailed, 'tests')
      })
    },
    
    // Configuración de entorno
    env: {
      // Variables de entorno para diferentes ambientes
      development: {
        baseUrl: 'http://localhost:3000'
      },
      staging: {
        baseUrl: 'https://staging-taskmaster.vercel.app'
      },
      production: {
        baseUrl: 'https://taskmaster-production.vercel.app'
      }
    }
  },
  
  // Configuración de component testing (opcional)
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    }
  }
}) 