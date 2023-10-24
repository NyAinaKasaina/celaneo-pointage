// FONCTION PERMETTANT DE VERIFIER SI UNE CHAINE EN PARAMETRES EST UNE DATE VALIDE

function isDateValid(dateString) {
    const timestamp = Date.parse(dateString)
    return !isNaN(timestamp)
}

// FONCTION PERMETTANT DE FORMATER UNE VALEUR DE TEMPS EN MILLISECONDE EN ( XX h XX m XX s ) 

function convertMillisecondsToHHMMSS(milliSeconds) {
    const seconds          = Math.floor(milliSeconds / 1000)
  
    // CALCUL HEURES, MINUTES, SECONDES

    const hours            = (Math.floor(seconds / 3600)).toString().padStart(2,'0')
    const minutes          = (Math.floor((seconds % 3600) / 60)).toString().padStart(2,'0')
    const remainingSeconds = (seconds % 60).toString().padStart(2,'0')
  
    // FORMATAGE DU RESULTAT EN "HHh MMm SSs"
    return `${hours}h ${minutes}m ${remainingSeconds}s`
}

module.exports = {
    isDateValid,
    convertMillisecondsToHHMMSS
}