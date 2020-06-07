import useGoogleTagManager from './index'
import { renderHook, act } from '@testing-library/react-hooks'

// Create .env file in thr root directory and assign a variable called GTM_TAG
require('dotenv').config()

/**
 * Version 0.0.1
 */
/**
 * useGoogleTagManager
 */

describe('useGoogleTagManager', () => {
  test('GTM should be initiated correct without config.', () => {
    const { dataLayer, gtmData, gtmEvent } = renderHook(() =>
      useGoogleTagManager(process.env.GTM_TAG)
    )

    expect(dataLayer).toBe(true)
    // expect(gtmData).toBe('function')
    // expect(gtmEvent).toBe('function')
  })

  // it('GTM should be initiated correct with config', () => {
  //   expect(useGoogleTagManager('GTM-1', { dataLayerName: 'x' })).toEqual(
  //     expect.arrayContaining([gtmEvent, gtmData])
  //   )
  // })
  // it('Inititation with empty gtm id should return false.', () => {
  //   expect(useGoogleTagManager('')).toBe(false)
  // })
  // it('Inititation with no gtm id should return false.', () => {
  //   expect(useGoogleTagManager()).toBe(false)
  // })
  // it('Inititation with a gtm id that does not start with GTM- should return false.', () => {
  //   expect(useGoogleTagManager('x')).toBe(false)
  // })
  // it('Inititation with empty config parameter should return false.', () => {
  //   expect(useGoogleTagManager('GTM-1', { dataLayerName: '' })).toBe(false)
  // })
  // it('Inititation a second time should not add the gtm tag again, should instead return the existing object.', () => {
  //   useGoogleTagManager('GTM-1')

  //   /**
  //    * Check if the gtag script is only available once.
  //    */
  //   expect(useGoogleTagManager('GTM-1', { dataLayerName: '' })).toBe(false)
  // })
})

/**
 * gtmEvent
 */

// describe('gtmEvent', () => {
//   it('New gtm event with correct event data.', () => {
//     expect(gtmEvent('cool')).toEqual(expect.arrayContaining([]))
//   })
//   it('New gtm event with empty event data should return false.', () => {
//     expect(gtmEvent('')).toBe(false)
//   })
//   it('New gtm event with no event data should return false.', () => {
//     expect(gtmEvent()).toBe(false)
//   })
//   it('New gtm event with event data that is not a string should return false.', () => {
//     expect(gtmEvent({ key: 'value' })).toBe(false)
//   })
// })

/**
 * gtmData
 */

// describe('gtmData', () => {
//   it('gtm data with correct event data object.', () => {
//     expect(gtmData({ key: 'cool' })).toEqual(expect.arrayContaining([]))
//   })
//   it('gtm data with correct event data string', () => {
//     expect(gtmData({ key: 'cool' })).toEqual(expect.arrayContaining([]))
//   })
//   it('gtm data with empty data', () => {
//     expect(gtmData('')).toBe(false)
//   })
//   it('gtm data with no data', () => {
//     expect(gtmData()).toBe(false)
//   })
// There should be a test case to test the object
// it('gtm data with not object data', () => {
//   expect(gtmData(['x'])).toBe(false)
// })
// })
