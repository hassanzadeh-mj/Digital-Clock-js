const hourElem=document.querySelector("#hour")
const minuteElem=document.querySelector("#minute")
const secondsElem=document.querySelector("#seconds")


setInterval(()=>{
    let myDate=new Date()
    let nowHour=myDate.getHours()
    let nowMinute=myDate.getMinutes()
    let nowSeco=myDate.getSeconds()
    if (nowHour<10) {
        nowHour="0"+nowHour
    }
    if (nowMinute<10) {
        nowMinute="0"+nowMinute
    }
    if (nowSeco<10) {
        nowSeco="0"+nowSeco
    }
    hourElem.innerHTML=nowHour
    minuteElem.innerHTML=nowMinute
    secondsElem.innerHTML=nowSeco
    
},1000)