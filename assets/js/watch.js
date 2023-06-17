const 
        $CLOCK_HOUR = document.getElementById('clock__hour'),
        $ALARM = document.createElement('audio'),
        SOUND = 'https://drive.google.com/uc?export=download&id=154iVWKEEGeM1QVJ0uFXl1V6viJvr6WcU&name=alarm.mp3'
let clockTimer, alarmTimer


export const PLAY_CLOCK = (target)=> {
    let hour = new Date().toLocaleTimeString()
    $CLOCK_HOUR.textContent = `${hour}`
    
    clockTimer = setInterval(()=>{
        let hour = new Date().toLocaleTimeString()
        $CLOCK_HOUR.textContent = `${hour}`
    },1000)
  
    target.disabled = true
    target.parentNode.disabled = true
}

export const PAUSE_CLOCK = ()=> {
    clearInterval(clockTimer)
    $CLOCK_HOUR.textContent = '00:00:00'
    document.getElementById('clock__on').disabled = false
}

$ALARM.src = SOUND

export const PLAY_ALARM = (target)=> {
    alarmTimer = setTimeout(()=>{
        $ALARM.play()
    },0)
    target.disabled = true
    target.parentNode.disabled = true
}

export const PAUSE_ALARM = ()=> {
    clearTimeout(alarmTimer)
    $ALARM.pause()
    $ALARM.currentTime = 0
    document.getElementById('alarm__on').disabled = false
}