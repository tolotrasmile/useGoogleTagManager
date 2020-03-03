/**
 * As described: https://developers.google.com/tag-manager/quickstart
 */

let dataLayer = []

/**
 * Just a console.log helper to print error messages.
 */
const log = msg => console.error(`[GoogleTagManager]: ${msg}`)

const gtmData = data => {
  // Should check if object key is string. gtmData({cool: 'cool'})
  if (data == undefined || data.length == 0) {
    log('Data should be provided.')
    return false
  } else {
    return dataLayer.push(data)
  }
}

const gtmEvent = event => {
  if (event == undefined || event.length == 0) {
    log('Data should be provided.')
    return false
  } else {
    return dataLayer.push({ event: event })
  }
}

const useGoogleTagManager = (id, conf) => {
  const checkParams = () => {
    if (id == undefined || id.length == 0) {
      log('ID should be provided.')
      return false
    } else if (conf) {
      for (let [key, value] of Object.entries(conf)) {
        if (!key.match(/(dataLayerName)|(auth)|(env)/)) {
          log(`The only keys allowed are 'dataLayerName, 'auth' and 'env`)
          return false
        } else if (value.length == 0) {
          log(`If you provide ${key}, then it shouldn't be empty.`)
          return false
        }
      }
    }
    return initScripts(id)
  }
  return checkParams()
}

/**
 * id = GTM-XXXX
 */
const initScripts = id => {
  // const gtm_auth = `&gtm_auth=${auth}`
  // const gtm_preview = `&gtm_preview=${preview}`
  const gtmHeadScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`
  //ns.html?id=${id}${gtm_auth}${gtm_preview}&gtm_cookies_win=x"
  const gtmBodyScript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}"height="0" width="0" style="display:none;visibility:hidden"></iframe>`
  //om/gtm.js?id='+i+dl+'${gtm_auth}${gtm_preview}&gtm_cookie
  if (typeof window !== `undefined`) {
    document.head.prepend(addElement('script', gtmHeadScript))
    document.body.prepend(addElement('noscript', gtmBodyScript))
    dataLayer = window.dataLayer
  }

  return [gtmData, gtmEvent]
}

/**
 * Small helper function.
 */
const addElement = (nodeType, innerHTML) => {
  const el = document.createElement(nodeType)
  el.innerHTML = innerHTML
  return el
}
// const initDataLayer = setDataLayer => {
//   const dataLayerScript = dataLayer => {
//     // setDataLayer(window.)
//     // return `window.${dataLayerName} = window.${dataLayerName} || [];
//     //   window.${dataLayerName}.push(${JSON.stringify(dataLayer)})`
//     return `dataLayer = ${JSON.stringify(dataLayer)}`
//   }

//   if (typeof window !== `undefined`) {
//     document.head.prepend(
//       addElement('script', dataLayerScript([{ huhu: 'cool' }]))
//     )
//   }
// }

// const dataLayer = window.$dataLayer

/**
 * Simple data layer usage. Add a key-value pair to the data layer.
 * dataLayer.push({'myVar':'is cool'})
 */

// const add = (data) => {
//     dataLayer.push(data)
// }

/**
 * Simple event usage.
 */

// const event = (event) => {
//     dataLayer.push({'event': event})
// }

export { useGoogleTagManager as default, gtmEvent, gtmData }
