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

    let vac = {'**********': ' '}
    for (key in MORSE_TABLE) {        
        //console.log(key)
        let dec = key.split('').map( e => e == '-' ? "11" : "10").join('')
        if (dec.length < 10) {
            //console.log("dec enter = " + dec)
            do {
                dec = "0" + dec
              } while (dec.length < 10);  
              //console.log("dec out = " + dec)
        }
        //console.log(dec)
        vac[dec] = MORSE_TABLE[key]        
    }
    
    //console.log(vac)
    let out = []
    //console.log("expr.length = " + expr.length)
    for (i=0; i < expr.length; i = i + 10){
        //console.log(expr.substr(i, 10));
        out.push(vac[expr.substr(i, 10)])
    }

    console.log(out.join(''))



    return out.join('')

}

module.exports = {
    decode
}