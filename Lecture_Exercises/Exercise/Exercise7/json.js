// generator 01
let noun = ['America','dream','pioneer','land of love','land'];
let adjective = ['again','the dreamers dreamed','on the plain','Where never kings connive nor tyrants scheme','where Liberty Is crowned with no false patriotic wreath']

let div = document.querySelector('div');

const Randomnoun = Math.floor(Math.random() * noun.length);
const Randomad = Math.floor(Math.random() * adjective.length);

div.innerHTML = `<p>Let America be ${noun[Randomnoun]} ${adjective[Randomad]}!</p>`;