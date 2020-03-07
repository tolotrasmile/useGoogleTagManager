let dataLayer = []

/**
 * Just a console.log helper to print error messages.
 */
const log = msg => console.error(`[GoogleTagManager]: ${msg}`)

/**
 * Example usage:
 * useGoogleTagManager('GTM-1234567) or useGoogleTagManager('GTM-1234567', {dataLayerName: 'myDataLayerName'})
 */
const useGoogleTagManager = (id, conf) => {
  const checkParams = () => {
    if (id == undefined || id.length == 0 || !id.match(/^GTM-/)) {
      log('ID should be provided.')
      return false
    } else if (conf) {
      for (let [key, value] of Object.entries(conf)) {
        if (!key.match(/(dataLayerName)/)) {
          // if (!key.match(/(dataLayerName)|(auth)|(env)/)) {
          log(`The only keys allowed are 'dataLayerName.`)
          return false
        } else if (value.length == 0) {
          log(`If you provide ${key}, then it shouldn't be empty.`)
          return false
        }
      }
    }
    return initScripts(id, conf || {})
  }
  return checkParams()
}

/**
 * initScripts adds the GTM js to the DOM-Head and Body.
 */
const initScripts = (id, { dataLayerName = 'dataLayer' }) => {
  /**
   * As described: https://developers.google.com/tag-manager/quickstart
   */
  const gtmHeadScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','${dataLayerName}','${id}');`
  const gtmBodyScript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`

  if (typeof document !== `undefined`) {
    document.head.prepend(addElement('script', gtmHeadScript))
    document.body.prepend(addElement('noscript', gtmBodyScript))
    dataLayer = window[dataLayerName]
  }

  return [gtmData, gtmEvent]
}

/**
 * Function to add data to the dataLayer.
 * Example usage:
 * gtmData('myvar': 'data')
 */

const gtmData = data => {
  if (data === undefined || data.length === 0 || typeof data !== `Object`) {
    log("Data should be provided in the following form: {'varname': 'data'}")
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

const gtmEvent = event => {
  if (event === undefined || event.length === 0 || typeof event !== `string`) {
    log('Event data should be a string.')
    return false
  } else {
    return dataLayer.push({ event: event })
  }
}

/**
 * Small helper function.
 */
const addElement = (nodeType, innerHTML) => {
  const el = document.createElement(nodeType)
  el.innerHTML = innerHTML
  return el
}

export { useGoogleTagManager as default, gtmEvent, gtmData }
