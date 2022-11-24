
// + : match 1 or more
// * : match 0 or more
// \w : Matching all letters and numbers ,stands for "word character", It always matches the ASCII characters [A-Za-z0-9_]
// \s : match all space 
// . : match any char
// [a-zA-Z0-9] : match char from a to z OR A to Z or 0 to 9
// ^the : check if the present in the start  
// [^aeiou] : char except a,e,i,o,u
// \.$ : check if . is present at last or not
// ca?t : matches -> cat,ct where a is optional 
// \b : \b allows you to perform a "whole words only" search using a regular expression in the form of \bword\b. A "word character" is a character that can be used to form words.
// \d : Match all numbers, character set [0-9]

const str = 'ct' ||'catastrophe' ||'If the g flag is used, all results $#%^&*$@#matching the complete regular expression will be returned.'


// remove space from string
let removeSpace = str.replace(/\s/g, '')

// remove all spaces and comma
let removeSpaceAndComma = str.replace(/[, ]/g,'')

// remove all special char
let removeSpecialChar = str.replace(/[^\w\s]/gi,'')

// match word starting with 're'
let matchWordStartingWith = str.match(/\bre\w+/gi,'')



console.log(str.match(/ca?t/gi));

