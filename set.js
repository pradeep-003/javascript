const setDemo = new Set()
setDemo.add(1)
setDemo.add(2)
setDemo.add(2) // Twice data do not get added only unique data
setDemo.add(5)
console.log(setDemo) 
setDemo.delete(2)
console.log(setDemo.size)
setDemo.clear()
console.log(setDemo.size)


