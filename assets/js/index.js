import { CONTENTS_TABLE } from "./contents_table.js";
import { HAMBURGER } from "./hamburger.js";
import { SHORTCUTS } from "./shortcuts.js";
import { NAME as person } from "./module_example.js";
import { PLAYGROUND } from "./playground.js";
import { PAUSE_ALARM, PAUSE_CLOCK, PLAY_ALARM, PLAY_CLOCK } from "./watch.js";
import { COUNTDOWN } from "./countdown.js";

document.addEventListener('DOMContentLoaded',ev=>{

    // Module #1
    card__person.innerHTML = person
    
    document.addEventListener('click',ev=>{
        const target = ev.target
        if(target.matches('#btn__menu, #btn__menu *')){
            HAMBURGER()
        }

        // Module #3
        if(target.matches('#clock__on, #clock__on *')){
            PLAY_CLOCK(target)
        }
        if(target.matches('#clock__off, #clock__off *')){
            PAUSE_CLOCK()
        }
        if(target.matches('#alarm__on, #alarm__on *')){
            PLAY_ALARM(target)
        }
        if(target.matches('#alarm__off, #alarm__off *')){
            PAUSE_ALARM()
        }
    })

    document.addEventListener('keydown',ev=>{
        SHORTCUTS(ev)

        // Module #2 - Commented for PreventDefault
        // PLAYGROUND(ev)
    })

    COUNTDOWN('countdown','Jun 22, 2023 18:00:00','Completed')

})