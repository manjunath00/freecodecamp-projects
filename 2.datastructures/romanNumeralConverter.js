function convertToRoman(num) {
    // take the num
    // 
    let roman = {
      '1': 'I',
      '5': 'V',
      '10': 'X',
      '50': 'L',
      '100': 'C',
      '500': 'D',
      '1000': 'M'
    }

    let impure = {
        '4': 'IV',
        '9': 'IX',
        '40': 'XL',
        '90': 'XC',
        '400': 'CD',
        '900': 'CM',
    }

    let total = {
        '1': 'I',
        '5': 'V',
        '10': 'X',
        '50': 'L',
        '100': 'C',
        '500': 'D',
        '1000': 'M',
        '4': 'IV',
        '9': 'IX',
        '40': 'XL',
        '90': 'XC',
        '400': 'CD',
        '900': 'CM',
    }
    
    let res = (num + '').split('')
    let final = []
    let len = res.length - 1
    for(let x of res) {
      let number = Math.pow(10, len) * parseFloat(x)
      final.push(number)
      len--
    }
    
    console.log(final, 'line 23')
    let letter = []
    
    let romanKeys = Object.keys(roman).map(r => parseFloat(r)).sort((a,b) => b- a)
    let impureKeys = Object.keys(impure).map(r => parseFloat(r)).sort((a,b) => b- a)


    let totalKeys = [...romanKeys, ...impureKeys]
    // 
    for (let y of final) {
        let number = y;
        let clock = true
        for(let x in romanKeys) {
          x = parseFloat(x)
          let char = romanKeys[x]; 
          let charNext = romanKeys[x+1]

            if((totalKeys.includes(y)) && clock) {
                letter.push(total[totalKeys[totalKeys.indexOf(y)]+''])
                // console.log(letter, 1)
                clock = false
            }
            // else if((y < char) && (y + charNext === char)) {
            //     let dig = roman[''+charNext] + roman[''+char]
            //     // letter += dig
            //     letter.push(dig)
            //     // console.log(letter, 2)
            //     clock = false
            else if ((y > char) && clock){
                while(number >= char) {
                    number -= char
                    letter.push(roman[char+''])
                }

                // console.log(letter, 3)
            } 
        }
    }
    
    console.log(letter.join(''))
    return letter;
}
  
convertToRoman(2)
convertToRoman(3)
convertToRoman(4)
convertToRoman(5)
convertToRoman(9)
convertToRoman(12)
convertToRoman(16)
convertToRoman(29)
convertToRoman(44)
convertToRoman(45)
convertToRoman(68)
convertToRoman(83)
convertToRoman(97)
convertToRoman(99)
convertToRoman(400)
convertToRoman(500)
convertToRoman(501)
convertToRoman(649)
convertToRoman(798)
convertToRoman(891)
convertToRoman(1000)
convertToRoman(1004)
convertToRoman(1006)
convertToRoman(1023)
convertToRoman(2014)
convertToRoman(3999)
convertToRoman(80)

  
  