// const gtmEvent = require('./index.js')
import { gtmEvent } from './index'

/**
 * gtmEvent
 */

describe('gtmEvent', () => {
  it('gtm event with correct event data', () => {
    expect(gtmEvent('cool')).toEqual(expect.arrayContaining([]))
  })
  it('gtm event with wrong event data', () => {
    expect(gtmEvent('')).toBe('err')
  })
  it('gtm event with no event data', () => {
    expect(gtmEvent()).toBe('err')
  })
})
