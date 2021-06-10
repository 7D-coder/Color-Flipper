const cl = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const btn = document.getElementById("btn")

const rc = document.querySelector(".clr")

btn.addEventListener("click",function(){ 
    let hex = "#"
    
    for(let j = 0;j<6;j++)
    {
     let ren = Math.floor(Math.random()*cl.length)
     hex = hex + cl[ren] 
    }
    

    document.body.style.backgroundColor = hex 
    rc.textContent = hex

})