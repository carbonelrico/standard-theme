import { shouldUseDarkMode, applyTheme } from '../utils/scheduler'

export default defineNuxtPlugin(() => {

  if (process.client) {

    const dark = shouldUseDarkMode()

    applyTheme(dark)

    // optional live update
    setInterval(() => {
      applyTheme(shouldUseDarkMode())
    }, 60000)

  }

})