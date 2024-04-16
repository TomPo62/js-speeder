import { validatePwd } from '../src'

describe('validatePwd', () => {
  it('validate passwords correctly', ()=>{
    expect(validatePwd('Validation123!')).toBeTruthy()
    expect(validatePwd('short')).toBeFalsy()
  })
})

