const $BALL = document.getElementById('ball')
let position = { x: 0, y: 0 }

function move() {
    $BALL.style.transform = `translate(${position.x}px, ${position.y}px)`;
}

export const PLAYGROUND = (ev)=> {
    const   $STAGE = document.getElementById('playground'),
            limits = { 
                ball: $BALL.getBoundingClientRect(), 
                stage: $STAGE.getBoundingClientRect() 
            },
            speed = 8

    ev.preventDefault()     
    switch (ev.key) {
        
        case 'ArrowUp':
            limits.ball.top > limits.stage.top ? position.y -= speed : ''
            break;
        case 'ArrowDown':
            limits.ball.bottom < limits.stage.bottom ? position.y += speed : ''
            break;
        case 'ArrowLeft':
            limits.ball.left > limits.stage.left ? position.x -= speed : ''
            break;
        case 'ArrowRight':
            limits.ball.right < limits.stage.right ? position.x += speed : ''
            break
    }
    
    move()
}