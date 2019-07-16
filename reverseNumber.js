reverseNumber = (input) =>{
    //convert to string, then split into array instead of string
    output = input.toString().split('')
    //reverse order of arry
    output.reverse().join('')
    //convert array back to string, and parseInt back to number
    return parseInt(output.join(''), 10)
}