// ===== MOBILE MENU =====
let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileNav = document.querySelector('.mobileNav');

hamberger.addEventListener('click', function() {
    mobileMenu.classList.add('open')
});
times.addEventListener('click', function(){
    mobileMenu.classList.remove('open');
});
mobileNav.addEventListener('click', function(){
    mobileMenu.classList.remove('open');
});



window.onload = function() {
    const inp = document.getElementById('inp')
    const nameList = document.getElementById('name-list')
    const display = document.getElementById('display')
    const giveATry = document.getElementById('give-a-try')
    const firstPosition = document.getElementById('first-position')
    const secondPosition = document.getElementById('second-position')
    const thirdPosition = document.getElementById('third-position')

    const participantNames = []

    inp.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            let newNames = event.target.value.split(', ')
            if(newNames[0] !=='') {
                newNames.forEach(name => {
                    participantNames.push(name)
                    let item = createListItem(name)
                    nameList.appendChild(item)
                    event.target.value = ''
                })
            }
        }
    })

    giveATry.addEventListener('click', function() {
        if(participantNames.length === 0) {
            alert('Error! Cannot find any name. PLease enter names.')
        } else {
            let shuffledNames = shuffle(participantNames)
            for(let i = 1; i < shuffledNames.length; i++) {
                (function (i, count) {

                    setTimeout(() => {
                        let rand = Math.floor(Math.random() * (shuffledNames.length))
                        display.innerHTML = shuffledNames[rand]

                        if(count === shuffledNames.length - 1) {
                            if(!firstPosition.innerHTML) {
                                firstPosition.innerHTML = shuffledNames[rand]
                                let ind = participantNames.indexOf(shuffledNames[rand])
                                participantNames.splice(ind, 1)
                            } else if(!secondPosition.innerHTML) {
                                secondPosition.innerHTML = shuffledNames[rand]
                                let ind = participantNames.indexOf(shuffledNames[rand])
                                participantNames.splice(ind, 1)
                            } else if(!thirdPosition.innerHTML) {
                                thirdPosition.innerHTML = shuffledNames[rand]
                                let ind = participantNames.indexOf(shuffledNames[rand])
                                participantNames.splice(ind, 1)
                            } else {
                                alert('Raffle Draw already Completed')
                                participantNames.splice(0, shuffledNames.length)
                            }
                        }

                    }, i)


                })(i*150, i)
            }
        }
    })


    function createListItem(name) {
        let li = document.createElement('li')
        li.className = 'list-group-item'
        li.innerHTML = name
        return li
    }


    function shuffle(arr) {
        let suffledArr = [...arr]

        for(let i = suffledArr.length - 1; i > 0; i--) {
            let rand = Math.floor(Math.random() * (i + 1))
            let temp = suffledArr[rand]
            suffledArr[rand] = suffledArr[i]
            suffledArr[i] = temp
        }

        return suffledArr
    }


















}