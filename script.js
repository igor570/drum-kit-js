//Adding the eventListeners

// const numDrumButtons = document.querySelectorAll('.drum').length;
// for (let i = 0; i < numDrumButtons; i++) {
//     document.querySelectorAll('.drum')[i].addEventListener('click', function() {
//         //gathering the specific button that caused the event (this.)
//         let buttonInnerHTML = this.innerHTML
//         console.log(buttonInnerHTML)
//
//     })
// }

//Storing all the buttons with a class of .drum
const numDrumButtons = document.querySelectorAll('.drum').length;

//Attaching eventListeners to the buttons, allowing the user to click the icons.
for (let i = 0; i < numDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', (event) => {
        let buttonInnerHTML = event.target.innerHTML
        audioCheck(buttonInnerHTML)

    })
}

//Attaching eventListeners to entire document, allow the user to press keys.
document.addEventListener('keypress', (event) => {
    let keyPressed = event.key
    audioCheck(keyPressed)
})


const audioCheck = (v) => {

    switch (v) {
        case 'w':
            const tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;
        case 'a':
            const tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;
        case 's':
            const tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;
        case 'd':
            const tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break;
        case 'j':
            const snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;
        case 'k':
            const crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;
        case 'l':
            const kickBass = new Audio('sounds/kick-bass.mp3')
            kickBass.play();
            break;
    }
}

