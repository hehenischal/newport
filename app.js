const main=document.querySelector(".main")
const ball=document.querySelector(".ball")

let leftright = Math.floor(Math.random()*2)
let right =leftright?true:false

let updown = Math.floor(Math.random()*2)
let up =leftright?true:false
let velocity=1


let ballmove = setInterval(()=>{
    let ballbounds=ball.getBoundingClientRect()
    let boardbounds=main.getBoundingClientRect()
    let ballboundsleft=parseInt(ballbounds.left)
    let ballboundsright=parseInt(ballbounds.right)
    let ballboundstop=parseInt(ballbounds.top)
    let ballboundsbottom=parseInt(ballbounds.bottom)
    let balltop=Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue("top")))
    let ballleft=Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue("left")))

    if(right && up)
    {
        ball.style.top = balltop-velocity+"px"
        ball.style.left = ballleft+velocity+"px"
    }

    if(!right && up)
    {
        ball.style.top = balltop-velocity+"px"
        ball.style.left = ballleft-velocity+"px"
    }
    if(right && !up)
    {
        ball.style.top = balltop+velocity+"px"
        ball.style.left = ballleft+velocity+"px"
    }
    if(!right && !up)
    {
        ball.style.top = balltop+velocity+"px"
        ball.style.left = ballleft-velocity+"px"
    }

    if (ballboundstop <= boardbounds.top)
    {
        leftright = Math.floor(Math.random()*2)
         right =leftright?true:false
         up = false
    }

    if (ballboundsbottom >= boardbounds.bottom)
    {
        leftright = Math.floor(Math.random()*2)
        right =leftright?true:false
        up = true
    }

    if (ballboundsright >= boardbounds.right)
    {
        updown = Math.floor(Math.random()*2)
        up =leftright?true:false
        right = false
    }

    if (ballboundsleft <= boardbounds.left)
    {
        right = true
        updown = Math.floor(Math.random()*2)
        up =leftright?true:false
        
    }


},1)
