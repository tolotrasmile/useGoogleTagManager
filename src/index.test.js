import useGoogleTagManager, { gtmEvent, gtmData } from './index'

/**
 * useGoogleTagManager
 */

describe('useGoogleTagManager', () => {
//   const gtmEvent = jest.fn('gtmEvent')
//   const gtmData = jest.mock('gtmData')
//  const gtmEvent = jest.spyOn(gtmEvent)
// const res = [[Function gtmData], [Function gtmEvent]]
  it('GTM should be initiated correct withour config.', () => {
    expect(useGoogleTagManager('dd')).toEqual(expect.arrayContaining([gtmEvent, gtmData]))
  })
  it('A gtm id should be provided.', () => {
    expect(useGoogleTagManager('')).toBe(false)
  })
  it('A gtm id should be provided.', () => {
    expect(useGoogleTagManager()).toBe(false)
  })
  it('GTM should be initiated correct with config', () => {
    expect(useGoogleTagManager('dd', {dataLayerName: 'x', auth: 'x', env: 'x'})).toEqual(expect.arrayContaining([gtmEvent, gtmData]))
  })
  it('GTM should be initiated with wrong config: empty values', () => {
    expect(useGoogleTagManager('dd', {dataLayerName: ''})).toBe(false)
  })
  
})

/**
 * gtmEvent
 */

describe('gtmEvent', () => {
  it('gtm event with correct event data', () => {
    expect(gtmEvent('cool')).toEqual(expect.arrayContaining([]))
  })
  it('gtm event with wrong event data', () => {
    expect(gtmEvent('')).toBe(false)
  })
  it('gtm event with no event data', () => {
    expect(gtmEvent()).toBe(false)
  })
})

/**
 * gtmData
 */

describe('gtmData', () => {
  it('gtm data with correct event data', () => {
    expect(gtmData('cool')).toEqual(expect.arrayContaining([]))
  })
  it('gtm data with wrong data', () => {
    expect(gtmData('')).toBe(false)
  })
  it('gtm data with no data', () => {
    expect(gtmData()).toBe(false)
  })
})
