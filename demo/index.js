import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import useGoogleTagManager from '../src/index'

const App = () => {
  const [gtmId, setGtmId] = useState('')
  const [list, setList] = useState([])

  const GtmComponent = () => {
    const { dataLayer, gtmData, gtmEvent } = useGoogleTagManager(gtmId, {
      debugging: true
    })

    return (
      <>
        <div>This is the dataLayer: {JSON.stringify(dataLayer)}</div>
        <div>
          {dataLayer && (
            <button onClick={() => gtmData(Date.now())}>Add data</button>
          )}
          {dataLayer && (
            <button onClick={() => gtmEvent({ myEvent: Date.now() })}>
              Add event
            </button>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <input
        value={gtmId}
        onChange={(e) => setGtmId(e.target.value)}
        type="text"
      />
      <button
        onClick={() => setList([...list, <GtmComponent key={list.length} />])}
      >
        Add Container
      </button>
      <div id="res">{list}</div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
