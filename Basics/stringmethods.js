const value = 'sushant'

// console.log(value.charAt(3)) // h , based on index it will give the values
/**
 * trim will remove while spaces from start and end of the string
 * it does not change the original string insted it will return new string
 * it is also work on below thingd
 * 
 * Space ( )
 * Tab (\t)
 * Newline (\n)
 * Carriage return (\r)
 * Form feed (\f)
 * Vertical tab (\v)
 * Non-breaking space (\xA0)
 * Other Unicode whitespace characters
 */

const newValue = 'sushant    '

// console.log(newValue.trim())


const newString = "\t\n  Mixed whitespace \r\n "
// console.log(newString)
// console.log(newString.trim())

// trimStart()  -> remove spaces from start of the string
// trimEnd() -> remove spaces from end of the string

// replace method
/*
  replace is used for to replace some string value
  string.replace('originalString', 'string to update')
 */

  let originalString = 'hi Sushant, how are you sushant'

  // replace only first instance
//   console.log(originalString.replace('sushant', 'vicky')) //hi vicky, how are you sushant

  // replace all occarance

//   console.log(originalString.replace(/Sushant/g, 'vicky')) // hi vicky, how are you sushant

const caseInSensitiveString = 'hi Sushant, how are you sushant'

// console.log(caseInSensitiveString.replace(/Sushant/gi, 'vicky')) // hi vicky, how are you vicky


// replaceAll() -> it id same as replace but replaceAll should have globle g


const replaceAllString = 'Hi Vicky, How are you vicky'

// console.log(replaceAllString.replaceAll('vicky', 'sushant'))  
// Hi Vicky, How are you sushant
// replace like string.replace in case sensitive way

// console.log(replaceAllString.replaceAll(/vicky/,'Sushant'))
// error need to pass g with regix

console.log(replaceAllString.replaceAll(/vicky/g,'Sushant'))
//Hi Vicky, How are you Sushant
// replace like string.replace in case sensitive way

// console.log(replaceAllString.replaceAll(/vicky/gi, 'Sushant'))
//Hi Sushant, How are you Sushant
// case in sensitive 

// split -> convert string to array

const stringValueForArray = 'Su-sh-ant'
// console.log(stringValueForArray.split('-')) // [ 'Su', 'sh', 'ant' ]
// console.log(typeof stringValueForArray.split('-')) // object


  const text = "The quick brown fox jumps over the lazy fox.";
//   const replacedAllRegex = text.replaceAll(/fox/, "wolf"); //String.prototype.replaceAll called with a non-global RegExp argument
//   console.log(replacedAllRegex)





