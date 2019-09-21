function rot13(str) { // LBH QVQ VG!

  let inputString = str.split('')
  let finalString = []
  function charCode(s) {
    let letter = /[a-zA-Z]/
    let decode, x
    if(letter.test(s)) {
        let x = s.charCodeAt(0)
        if(x > 77) {
            x -= 13
        }else {
            x += 13
        }
     decode = String.fromCharCode(x)
    }else {
        decode = s;
    }
    finalString.push(decode)
    return decode
  }

  inputString.forEach(charCode)

  console.log(finalString.join(''))
//   charCode('S')
  return finalString.join('')
}
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!")
  rot13("SERR YBIR?")
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")