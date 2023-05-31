const hour_hand = document.querySelector(".hour-hand")
const minute_hand = document.querySelector(".minute-hand")
const second_hand = document.querySelector(".second-hand")

const get_time = () => {
    const date = new Date()

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
}

setInterval(() => {

    const { seconds, minutes, hours } = get_time()

    second_hand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`
    minute_hand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`
    hour_hand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`
}, 1000)