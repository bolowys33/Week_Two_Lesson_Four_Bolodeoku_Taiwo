const global = 'Global scope'

function scope () {
  const local = 'Local scope'
  const access = `${global} in a function`
  console.log(access)
  return local
}

scope() // Outputs 'Global scope in a function'
console.log(local) // Shows ReferenceError, local is not defined
