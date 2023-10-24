const { convertMillisecondsToHHMMSS } = require('../../src/utils')

describe('convertMillisecondsToHHMMSS', () => {

    it('devrait formater correctement les millisecondes en temps avec des heures', () => {
        const milliSeconds   = 4567890 // 1 heure, 46 mn et 7 secondes
        const formattedTime  = convertMillisecondsToHHMMSS(milliSeconds)
        expect(formattedTime).toBe('01h 16m 07s')
    })
    
    it('devrait formater correctement les millisecondes en temps sans heures', () => {
        const milliSeconds   = 3661000 // 1 heure, 1 minute et 1 seconde
        const formattedTime  = convertMillisecondsToHHMMSS(milliSeconds)
        expect(formattedTime).toBe('01h 01m 01s')
    })
    
    it('devrait formater correctement les millisecondes en temps sans minutes et heures', () => {
        const milliSeconds   = 59000 // 59 secondes
        const formattedTime  = convertMillisecondsToHHMMSS(milliSeconds)
        expect(formattedTime).toBe('00h 00m 59s')
    })
})

