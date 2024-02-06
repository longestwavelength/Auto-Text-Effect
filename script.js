const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We love Programming!'
let idx = 1
let speed = 300/speedEl.value

function writeText() {
        textEl.innerText = text.slice(0, idx)

        idx++

        if(idx > text.length) {
            idx = 1
        }

        if(speed < 60 || speed == Infinity){
            speed = 60
        }

        setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => 
    speed = 300/e.target.value
)

writeText()
