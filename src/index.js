import React from 'react'

function useGoogleTagManager(id, conf) {
  const dataLayerName = conf?.dataLayerName || 'dataLayer'
  const beSilent = conf?.debugging || false
  const log = (lvl, msg) =>
    beSilent && console[lvl](`[GoogleTagManager]: ${msg}`)
  const [dataLayer, setDataLayer] = React.useState(null)

  function checkParams(id, conf) {
    if (id === undefined || id.length === 0 || !id.match(/^GTM-/)) {
      log('error', 'ID should be provided.')
      return false
    } else if (conf) {
      for (const [key, value] of Object.entries(conf)) {
        if (!key.match(/(dataLayerName)/)) {
          log('error', 'The only keys allowed are -dataLayerName-.')
          return false
        } else if (value.length === 0) {
          log('error', `If you provide ${key}, then it shouldn't be empty.`)
          return false
        }
      }
    }
  }

  if (!checkParams(id, conf)) return {}

  React.useEffect(() => {
    if (!window[dataLayerName]) {
      log(
        'warn',
        `Google Tag Manager not found. Trying to init GTM with: ${id}.`
      )
      initScripts(id, dataLayerName)
    } else {
      log('info', 'Google Tag Manager found.')
      setDataLayer(window.dataLayerName)
    }
  }, [])

  React.useEffect(() => {
    setDataLayer(window[dataLayerName])
  }, [window[dataLayerName]])

  /**
   * Function to add data to the dataLayer.
   * Example usage:
   * gtmData('myvar': 'data')
   */

  const gtmData = (data) => {
    if (data === undefined || data.length === 0) {
      log(
        'error',
        "Data should be provided in the following form: {'varname': 'data'}"
      )
      return false
    } else {
      return dataLayer.push(data)
    }
  }

  /**
   * Function to trigger an event.
   * Example usage:
   * gtmEvent('myEvent')
   */

  const gtmEvent = (event) => {
    if (
      event === undefined ||
      event.length === 0 ||
      typeof event !== 'string'
    ) {
      log('error', 'Event data should be a string.')
      return false
    } else {
      return dataLayer.push({ event: event })
    }
  }

  return { dataLayer, gtmData, gtmEvent }
}

const initScripts = (id, dataLayerName) => {
  /**
   * As described: https://developers.google.com/tag-manager/quickstart
   */
  const gtmHeadScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','${dataLayerName}','${id}');`
  const gtmBodyScript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`

  if (typeof document !== 'undefined') {
    document.head.prepend(addElement('script', gtmHeadScript))
    document.body.prepend(addElement('noscript', gtmBodyScript))
    return window ? window[dataLayerName] : true
  }

  return true
}

/**
 * Small helper function.
 */
const addElement = (nodeType, innerHTML) => {
  const el = document.createElement(nodeType)
  el.innerHTML = innerHTML
  return el
}

export { useGoogleTagManager as default }
