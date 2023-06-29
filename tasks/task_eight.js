function outer () {
  const outerScope = 'Outer function'

  function inner () {
    const innerScope = `I am the function in the ${outerScope}`
    console.log(innerScope)
  }

  return inner()
}

const outFunction = outer()
console.log(outFunction)
