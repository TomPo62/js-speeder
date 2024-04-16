import { validateEmail } from "../src"

describe('validateEmail', () => {
  it('validate email correctly', ()=>{
    expect(validateEmail('test@exemple.com')).toBeTruthy()
    expect(validateEmail('invalid-email')).toBeFalsy()
  })
})

