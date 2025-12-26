import PMT from '../../src/composables/usePMT.ts'

describe('UsePMT', () => {
  it('returns the expected result', () => {
    const result = PMT(0.1 / 12, 24, 30000)
    expect(Math.trunc(result)).toEqual(-1384)
  })
})
