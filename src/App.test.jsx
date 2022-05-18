import Resultado from './operations/calculos'
  
describe('Given a number', () => {
    it('div', () => {
      expect(Resultado('4', '2', '/')).toBe('2')
      expect(Resultado('4', '0', '/')).toBe('ERROR')
    })
    it('mult', () => {
      expect(Resultado('4', '2', "*")).toBe('8')
    })
    it('sum', () => {
      expect(Resultado('4', '2', '+')).toBe('6')
    })
    it('subs', () => {
      expect(Resultado('4', '2','-')).toBe('2')
    })
    it('mod', () => {
      expect(Resultado('5', '5', '%')).toBe('0')
    })
  })

  

