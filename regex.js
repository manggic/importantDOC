


// + : match 1 or more
// * : match 0 or more
// \w : match all word
// \s : match all space 
// . : match any char
// [a-zA-Z0-9] : match char from a to z OR A to Z or 0 to 9



const str = 'If the g flag is used, all results matching the complete regular expression will be returned.'



// remove space from string
let removeSpace = str.replace(/\s/g, '')


// remove all spaces and comma
let removeSpaceAndComma = str.replace(/[, ]/g,'')


console.log(removeSpaceAndComma);

