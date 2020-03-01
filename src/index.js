// import React, { useState, useEffect } from "react"

// const win = typeof window !== "undefined" ? window : Nothing
// const doc = typeof document !== "undefined" ? document : Nothing
/**
 * The hook
 * Shoud return the datalayer
 */

 let dataLayer = []

const gtmData = data => {
    // Should check if object key is string. gtmData({cool: 'cool'})
    if (data == undefined || data.length == 0) {
        return 'err'
    } else {
        return dataLayer.push(data)
    }
  }
  
  const gtmEvent = event => {
    return dataLayer.push({ event: event })
  }
  
  const useGoogleTagManager = (id, conf) => {
    // Wrap the require in check for window
  
    /**
     * dataLayer needs to be exposed to component.
     * Whenever dataLayer changes, the head-tag needs to be updated.
     */
  
    // const [dataLayer, setDataLayer] = useState([])
  
    // useEffect(() => initDataLayer(dataLayer), [dataLayer])
    initScripts(id)
    // return window.dataLayer
    return [gtmData, gtmEvent]
  
    // return "dataLayer"
    // return window.dataLayer
  }
  
  const addElement = (nodeType, innerHTML) => {
    const el = document.createElement(nodeType)
    el.innerHTML = innerHTML
    return el
  }
  
  /**
   * As described: https://developers.google.com/tag-manager/quickstart
   */
  
  /**
   * id = GTM-XXXX
   */
  const initScripts = id => {
    const gtmHeadScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`
  
    const gtmBodyScript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}"height="0" width="0" style="display:none;visibility:hidden"></iframe>`
  
    if (typeof window !== `undefined`) {
      document.head.prepend(addElement("script", gtmHeadScript))
      document.body.prepend(addElement("noscript", gtmBodyScript))
      dataLayer = window.dataLayer
    }
  }
  
  const initDataLayer = setDataLayer => {
    const dataLayerScript = dataLayer => {
      // setDataLayer(window.)
      // return `window.${dataLayerName} = window.${dataLayerName} || [];
      //   window.${dataLayerName}.push(${JSON.stringify(dataLayer)})`
      return `dataLayer = ${JSON.stringify(dataLayer)}`
    }
  
    if (typeof window !== `undefined`) {
      document.head.prepend(
        addElement("script", dataLayerScript([{ huhu: "cool" }]))
      )
    }
  }
  
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
  