function outerFunction() {
  const outerScope = 'Outer function'

  function innerFunction () {
    const innerScope = `I am the function in the ${outerScope}`
    console.log(innerScope)
  }

  return innerFunction()
}

const outFunction = outerFunction()
console.log(outFunction)
