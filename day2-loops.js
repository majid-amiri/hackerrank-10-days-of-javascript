'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
const VOWELS = /[auioe]$/
function vowelsAndConsonants(s) {
    for(let i = 0; i < s.length; i++){
        const char = s.charAt(i)
        if(VOWELS.test(char))
            console.log(char)
        else
            setTimeout(() => console.log(char), 0)
    }
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
