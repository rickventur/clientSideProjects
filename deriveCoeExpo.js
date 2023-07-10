function derive(coefficient,exponent) {
    let s = coefficient * exponent
    let n1 = exponent - 1
    console.log(`${s}x^${n1}`)
}

derive(7,8)