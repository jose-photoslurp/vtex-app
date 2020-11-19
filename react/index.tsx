import { canUseDOM } from 'vtex.render-runtime'

import { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {
  switch (e.data.eventName) {
    case 'vtex:pageView':
      pageView()
      break

    case 'vtex:cartChanged':
      cartChanged()
      break

    default: {
      break
    }
  }
}

function pageView() {
  // eslint-disable-next-line no-console
  console.log('Page view')
}

function cartChanged() {
  // eslint-disable-next-line no-console
  console.log('Cart changed')
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
