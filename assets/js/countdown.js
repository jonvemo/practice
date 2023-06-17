export const COUNTDOWN = (id, limitDate, finalMessage) => {
    const 
        $COUNTDOWN = document.getElementById(id),
        countdownDate = Date.parse(limitDate)

    const COUNTDOWNTEMPO = setInterval(() => {
        
        const 
            now = Date.now(),
            limitTime = countdownDate - now,
            days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            hours = String(Math.floor((limitTime / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
            minutes = String(Math.floor((limitTime / (1000 * 60)) % 60)).padStart(2, "0"),
            seconds = String(Math.floor((limitTime / 1000) % 60)).padStart(2, "0")
      
        $COUNTDOWN.textContent = `Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`
        if (limitTime < 0) {
            clearInterval(COUNTDOWNTEMPO)
            $COUNTDOWN.textContent = `${finalMessage}`
        }
        
    },1000)
    
}