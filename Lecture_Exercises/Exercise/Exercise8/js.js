const switcher = document.querySelector('ul')

function colorC(event) {
    console.log(event.target.classList.value);
    const change = event.target.classList.value;
    const html = document.querySelector('html');
    const main = document.querySelector('main');
    const a = document.querySelector('a');
    html.style.background = change;
    main.style.color = 'white';
    a.style.color = 'white';
    if (change === 'white' || change === 'yellow') {
        main.style.color = 'black';
        a.style.color = 'black';
    }
}


switcher.addEventListener('click',colorC)