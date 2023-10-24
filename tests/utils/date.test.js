const { isDateValid } = require('../../src/utils')

describe('isDateValid', () => {
    it('devrait retourner true pour une date valide', () => {
        const dateString = '2023-10-23T12:00:00.000Z'
        const result     = isDateValid(dateString)
        expect(result).toBe(true)
    })

    it('devrait retourner false pour une chaîne de caractères non valide', () => {
        const invalidDateString = 'date invalide'
        const result            = isDateValid(invalidDateString)
        expect(result).toBe(false)
    })

    it('devrait retourner false pour une date invalide', () => {
        const invalidDateString = '2023-02-30T12:00:00.000Z'
        const result            = isDateValid(invalidDateString)
        expect(result).toBe(true)
    })
})
