'use strict';

// h1 ‘love’ 的滚动视差特效
const body = document.querySelector('body')
const background = document.querySelector(".section1_background")
body.addEventListener('scroll', () => {
    const scrollTop = body.scrollTop
    if (scrollTop !== 0) {
        background.style.backgroundPosition = `calc(50% + ${scrollTop/7}px) calc(25% + ${scrollTop/7}px)`
    } else {
        background.style.backgroundPosition = ''
    }
})

/**
 * ----------------------------------------------------------------
 */
// 计算在一起天数 
const dateBegin = new Date('2022/10/21 0:0:0') //开始时间
const dateNow = new Date() //结束时间
const dateGap = dateNow.getTime() - dateBegin.getTime() //时间差秒
// 计算出相差天数
let days = Math.floor(dateGap / (24 * 3600 * 1000)) + 1

const toToday = document.getElementById('days')
// 数字滚动效果

const break1_text = document.querySelector("#break_text-1")
const break2_text = document.querySelector("#break_text-2")

const scrollReveal = function () {
    const clientHeight = break2_text.getBoundingClientRect().top
    console.log(clientHeight)

    if (clientHeight < window.innerHeight) {
        // Do some magic

        break1_text.classList.add('floatUp')
        break2_text.classList.add('floatUp')

        let startToEnd = 0
        const jumpDays = (days) => {

            if (startToEnd < days) {
                startToEnd++
            } else {
                // set style here                 
                document.getElementById('days').style.color = 'pink'
                clearInterval(jump)
            }
            toToday.innerHTML = startToEnd
        }
        const jump = setInterval(jumpDays, 24, days)


        body.removeEventListener('scroll', scrollReveal)
    }
}
body.addEventListener('scroll', scrollReveal)



/**
 * ----------------------------------------------------------------
 */
// 日期倒计时

const timer1 = 'valentineDay'
const timer2 = 'nissiBirthday'
const timer3 = 'charlieBirthday'
const timer4 = 'Anniversary'

const valentineDay = '/02/14 00:00:00'
const nissiBirthday = '/11/21 00:00:00'
const charlieBirthday = '/12/25 00:00:00'
const Anniversary = '/10/21 00:00:00'

setInterval(updateTimer, 1000, timer1, valentineDay)
setInterval(updateTimer, 1000, timer2, nissiBirthday)
setInterval(updateTimer, 1000, timer3, charlieBirthday)
setInterval(updateTimer, 1000, timer4, Anniversary)

// functional timer
function isLeap(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return 1;
    }
    return false;
}

function updateTimer(elementID, date) {

    let now = new Date()
    let yearNow = now.getFullYear()

    let targetDate = Date.parse(yearNow + date)

    if (targetDate < now) {
        yearNow++
        targetDate = Date.parse(yearNow + date)
    }

    let diff = targetDate - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24))
    let hours = Math.floor(diff / (1000 * 60 * 60))
    let mins = Math.floor(diff / (1000 * 60))
    let secs = Math.floor(diff / 1000)

    let d = String(days)
    let h = String(hours - days * 24)
    let m = String(mins - hours * 60)
    let s = String(secs - mins * 60)

    document.getElementById(elementID)
        .innerHTML =
        '<div class="timer-box_1">' + d.padStart(3, '0') + '<div class="timer-title">DAYS</div></div>' +
        '<div class="timer-box_1">' + h.padStart(2, '0') + '<div class="timer-title">HOURS</div></div>'

    document.getElementById('minutes')
        .innerHTML =
        '<div class="timer-box_2">' + '<div class="min-sec">' + m.padStart(2, "0") + '</div>' + '<div class="timer-title">MINUTES</div></div>'

    document.getElementById('seconds')
        .innerHTML =
        '<div class="timer-box_2">' + '<div class="min-sec">' + s.padStart(2) + '</div>'  + '<div class="timer-title">SECONDS</div></div>'

    // if (isLeap(yearNow)) {
    //     if (days == 364) {
    //         document.getElementById(elementID)
    //             .innerHTML = 
    //             '<div class="timer-box_2">' + '就在今天' + '</div>'
    //         }
    // } else {
    //     if (days == 364) {
    //         document.getElementById(elementID)
    //             .innerHTML = 
    //             '<div class="timer-box_2">' + '就在今天' + '</div>'
    //     }
    // }
}



/**
 * ----------------------------------------------------------------
 */


/**
 * ----------------------------------------------------------------
 */

const revealElements = document.querySelectorAll('[data-reveal]')
const scrollRevealA = function () {

    revealElements.forEach(el => {
        const isElementsOnScreen = el.getBoundingClientRect().top < window.innerHeight
        if (isElementsOnScreen) {
            el.classList.add('revealed')
            console.log('revealed')
        } else {
            el.classList.remove('revealed')
            console.log('removed')

        }
    })

}

body.addEventListener('scroll', scrollRevealA)


const poem = document.querySelector('.poem')
const scrollRevealB = function () {
    const isElementsOnScreen = poem.getBoundingClientRect().top < window.innerHeight
    if (isElementsOnScreen) {
        poem.classList.add('showUp')
        console.log('show')
    } else {
        poem.classList.remove('showUp')
    }

}

body.addEventListener('scroll', scrollRevealB)