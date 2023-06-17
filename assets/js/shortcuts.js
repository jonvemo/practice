export const SHORTCUTS = (ev)=>{

   const CAPSLOCK = ev.getModifierState('CapsLock')
   const MESSAGGE = (ev) => CAPSLOCK ? console.log(`Your pressed: Windows + Alt + Bloq Mayus`) : console.log(`Your pressed: Windows + Alt + ${ev.key}`)

    if(ev.metaKey && ev.altKey && CAPSLOCK) {
        MESSAGGE(ev)
    }
    if(ev.key === 'a' && ev.metaKey && ev.altKey) {
        MESSAGGE(ev)
    }
} 