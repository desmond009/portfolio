/* global __AUTTER_RELEASE__ */
import { initAutterBrowser } from '@autter/runtime-browser'

// Publishable client key (autter_rtc_…), scoped to this site's origins.
const clientKey = import.meta.env.VITE_AUTTER_CLIENT_KEY

if (clientKey) {
  initAutterBrowser({
    endpoint: 'https://otlp.autter.dev/v1/browser',
    clientKey,
    service: 'portfolio',
    environment: import.meta.env.MODE,
    release: __AUTTER_RELEASE__,
  })
}
