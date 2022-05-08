const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi')
const regexp = /the/gi
console.log(str.match(regexp)) // ['the', 'the', 'the']

// 1. test()
const test = /fox/gi
console.log(test.test(str)) // true

// 2. replace()
console.log(str.replace(test, 'cat'))
/* 
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown cat jumps over the lazy dog.
abbcccdddd
*/
console.log(str)

// 3. g
const gPlug = /the/g
console.log(str.match(gPlug)) // ['the', 'the']

// 4. i
const iPlug = /the/gi
console.log(str.match(iPlug)) // ['the', 'the', 'the']

// 5. m
console.log(str.match(/\./gi)) // ['.', '.', '.', '.']
console.log(str.match(/\.$/gi)) // null
console.log(str.match(/\.$/gim)) // ['.']

// 6. ^ / $
console.log(str.match(/d$/g)) // null
console.log(str.match(/d$/gm)) // ['d']
console.log(str.match(/^t/gm)) // ['t']
console.log(str.match(/^t/gim)) // ['t', 'T']

// 7. . / a|b / ab?
console.log(str.match(/./g)) // (133) [···]
console.log(str.match(/http/g)) // ['http']
console.log(str.match(/h..p/g)) // ['http']

console.log(str.match(/fox|dog/g)) // ['fox', 'dog']

console.log(str.match(/com?/g)) // ['co', 'com', 'com']

// 8. {3} / {3,} / {3,5}
console.log(str.match(/d{2}/g)) // ['dd', 'dd']
console.log(str.match(/d{2,}/g)) // ['dddd']
console.log(str.match(/d{2,3}/g)) // ['ddd']

console.log(str.match(/\w{2,3}/g)) // (36) [···]
console.log(str.match(/\b\w{2,3}\b/g)) // (8) ['010', 'com', 'www', 'com', 'The', 'fox', 'the', 'dog']

// 9) [abc] / [a-z] / [A-Z] / [0-9] / [가-힣]
console.log(str.match(/[fox]/g)) // (12) ['o', 'o', 'o', 'o', 'f', 'o', 'o', 'f', 'o', 'x', 'o', 'o']
console.log(str.match(/[0-9]{1,}/g)) // (5) ['010', '1234', '5678', '7035', '60']

// 10) ∖w / ∖b / \d / \s
console.log(str.match(/\bf\w{1,}\b/g)) // (2) ['frozen', 'fox']
console.log(str.match(/\s/g)) // (14) ['\n', '\n', '\n', '\n', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '\n', '\n']

const space = `     the hello world     

`
console.log(space.replace(/\s/g, '')) // thehelloworld

// 11) (?=) / (?<=)
console.log(str.match(/.{1,}(?=@)/g)) // ['thesecon']
console.log(str.match(/(?<=@).{1,}/g)) // ['gamil.com']