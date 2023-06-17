const 
        SECTIONS = document.querySelectorAll("section"),
        $LIST = document.getElementById('list'),
        $TEMPLATE = document.getElementById('template__contents').content,
        $FRAGMENT = document.createDocumentFragment()
export const CONTENTS_TABLE = 
    SECTIONS.forEach((el,i)=> {
        const 
                SECTION = SECTIONS[i],
                $MODULE = SECTION.querySelector('h2').textContent,
                $MODULE_DESCRIPTION = SECTION.querySelector('h2').getAttribute('data-description') || 'No Description'

        i++
        $TEMPLATE.querySelector('a').dataset.description = $MODULE_DESCRIPTION
        $TEMPLATE.querySelector('a').href = `#module__${i}`
        $TEMPLATE.querySelector('a').textContent = `Module ${i}: ${$MODULE}`
        let $clone = document.importNode($TEMPLATE,true)
        $FRAGMENT.appendChild($clone)
    })
$LIST.appendChild($FRAGMENT)

/*
 user
 user.sername John Verdugo
 user.descriminator
 user.id

 discord si es un bot
 if(message.author.bot) {
    ...
 }
*/
/*
class UserName {
    static users = []
    constructor(value){
        this.value = value
        this.ensureValueIsDefined(value)
    }
    ensureValueIsDefined(value){
        console.log(`Bot: ${value.bot}, Value: ${value.value}`);
        this.value = value.bot ? `${value.value} :robot:` : `${value.value} :no-robot:`;
    }
}
class User {
    constructor(bot,name) {
        this.bot = bot
        this.name = new UserName({ bot: this.bot, value: name })
    }
    get botValue(){
        return this.bot
    }
    get nameValue(){
        return this.name.value
    }
}
new User(true,'John')
new User(false,'Miila')

UserName.users.forEach(el=>{
    console.log(el)
})
*/