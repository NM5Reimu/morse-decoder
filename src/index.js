const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let substrings = [];
    let result = '';

    for (let i = 0; i <= expr.length; i += 10) {
        if (expr.substr(i, 10) !== '') {
            substrings.push(expr.substr(i, 10));
        }
    }
    for (let i = 0; i < substrings.length; i++){
        result += numbersToSymbols(substrings[i]);
    }
    return result;
}

function numbersToSymbols(numArray) {
    let symbols = '';
    for (let i = 0; i < 10; i += 2) {
        if (numArray[i] == '0' && numArray[i+1]=='0') symbols += '';
        if (numArray[i] == '1' && numArray[i+1]=='0') symbols += '.';
        if (numArray[i] == '1' && numArray[i+1]=='1') symbols += '-';
        if (numArray[i] == '*') return ' ';
    }
    return MORSE_TABLE[symbols];
}
  

module.exports = {
    decode
}