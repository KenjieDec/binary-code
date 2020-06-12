const textb = {


    " ": "00100000",

    '.': '00101110',
    ',': '00101100',
    '/': '00101111',
    '\\': '01011100',
    '=': '00111101',
    '+': '00101011',
    '?': '00111111',
    '!': '00100001',
    '"': '00100010',
    "'": "00100111",
    '(': '00101000',
    ')': '00101001',
    '*': '00101010',
    '&': '00100110',
    '%': '00100101',
    '$': '00100100',
    '#': '00100011',
    ':': '00111010',
    ';': '00111011',


    'a': '01100001',
    'b': '01100010',
    'c': '01100011',
    'd': '01100100',
    'e': '01100101',
    'f': '01100110',
    'g': '01100111',
    'h': '01101000',
    'i': '01101001',
    'j': '01101010',
    'k': '01101011',
    'l': '01101100',
    'm': '01101101',
    'n': '01101110',
    'o': '01101111',
    'p': '01110000',
    'q': '01110001',
    'r': '01110010',
    's': '01110011',
    't': '01110100',
    'u': '01110101',
    'v': '01110110',
    'w': '01110111',
    'x': '01111000',
    'y': '01111001',
    'z': '01111010',


    'A': '01000001',
    'B': '01000010',
    'C': '01000011',
    'D': '01000100',
    'E': '01000101',
    'F': '01000110',
    'G': '01000111',
    'H': '01001000',
    'I': '01001001',
    'J': '01001010',
    'K': '01001011',
    'L': '01001100',
    'M': '01001101',
    'N': '01001110',
    'O': '01001111',
    'P': '01010000',
    'Q': '01010001',
    'R': '01010010',
    'S': '01010011',
    'T': '01010100',
    'U': '01010101',
    'V': '01010110',
    'W': '01010111',
    'X': '01011000',
    'Y': '01011001',
    'Z': '01011010'
  }

  ///Convert String to Binary
  const binary = (text) => {
    for (let n = 0; n < text.length; n++) {
        let newtext
        let textn = text[n]

            newtext = textb[textn]

            
            if(newtext){
                text = text.replace(text[n], newtext)
            }
    
        }
            return text;
}
const bin = (text) => {
    for (let n = 0; n < text.length; n++) {
        let newtext
        let textn = text[n]

            newtext = textb[textn]

            
            if(newtext){
                text = text.replace(text[n], newtext)
            }
    
        }
            return text;
}
  // Convert Binary to string

  const string = (text) => {

    let s = text.split(" ").join("")
    let Binar = s.match(/.{1,8}/g).join(' ')
    let newBinar = Binar.split(" ")
    var binc = [];
    
    for (n = 0; n < newBinar.length; n++) {
        binc.push(String.fromCharCode(parseInt(newBinar[n], 2)));
      }
    return binc.join("")
}


const text = (text) => {

    let s = text.split(" ").join("")
    let Binar = s.match(/.{1,8}/g).join(' ')
    let newBinar = Binar.split(" ")
    var binc = [];
    
    for (n = 0; n < newBinar.length; n++) {
        binc.push(String.fromCharCode(parseInt(newBinar[n], 2)));
      }
    return binc.join("")
}
  
  module.exports = { 
      binary,
      bin,
      string,
      text,
  }