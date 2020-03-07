import useGoogleTagManager, { gtmEvent, gtmData } from './index'

/**
 * useGoogleTagManager
 */

describe('useGoogleTagManager', () => {
  it('GTM should be initiated correct without config.', () => {
    expect(useGoogleTagManager('GTM-1')).toEqual(expect.arrayContaining([gtmEvent, gtmData]))
  })
  it('GTM should be initiated correct with config', () => {
    expect(useGoogleTagManager('GTM-1', {dataLayerName: 'x'})).toEqual(expect.arrayContaining([gtmEvent, gtmData]))
  })
  it('Inititation with empty gtm id should return false.', () => {
    expect(useGoogleTagManager('')).toBe(false)
  })
  it('Inititation with no gtm id should return false.', () => {
    expect(useGoogleTagManager()).toBe(false)
  })
  it('Inititation with a gtm id that does not start with GTM- should return false.', () => {
    expect(useGoogleTagManager('x')).toBe(false)
  })
  it('Inititation with empty config parameter should return false.', () => {
    expect(useGoogleTagManager('GTM-1', {dataLayerName: ''})).toBe(false)
  })
})

/**
 * gtmEvent
 */

describe('gtmEvent', () => {
  it('New gtm event with correct event data.', () => {
    expect(gtmEvent('cool')).toEqual(expect.arrayContaining([]))
  })
  it('New gtm event with empty event data should return false.', () => {
    expect(gtmEvent('')).toBe(false)
  })
  it('New gtm event with no event data should return false.', () => {
    expect(gtmEvent()).toBe(false)
  })
  it('New gtm event with event data that is not a string should return false.', () => {
    expect(gtmEvent({key: 'value'})).toBe(false)
  })
})

/**
 * gtmData
 */

describe('gtmData', () => {
  it('gtm data with correct event data object.', () => {
    expect(gtmData({key: 'cool'})).toEqual(expect.arrayContaining([]))
  })
  it('gtm data with correct event data string', () => {
    expect(gtmData({'key': 'cool'})).toEqual(expect.arrayContaining([]))
  })
  it('gtm data with empty data', () => {
    expect(gtmData('')).toBe(false)
  })
  it('gtm data with no data', () => {
    expect(gtmData()).toBe(false)
  })
  it('gtm data with not object data', () => {
    expect(gtmData(['x'])).toBe(false)
  })
})
