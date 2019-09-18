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

function getLetter(s) {
    let letter;
    // Write your code here
    const setA = {a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'}
    const setB = {b: 'b', c: 'c', d: 'd', f: 'f', g: 'g'}
    const setC = {h: 'h', j: 'j', k: 'k', l: 'l', m: 'm'}
    const firstChar = s[0];
    switch(firstChar){
        case setA[firstChar]:
            letter = 'A';
            break;
        case setB[firstChar]:
            letter = 'B';
            break;
        case setC[firstChar]:
            letter = 'C';
            break;
        default:
            letter = 'D';
    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
