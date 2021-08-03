// Static collection
const itemsByQuerySelector = document.querySelectorAll('li.element')
console.log(`itemsByQuerySelector`, itemsByQuerySelector) // NodeList[...], 2

// Live collection
const itemsByClassName = document.getElementsByClassName('element')
console.log(`itemsByClassName`, itemsByClassName) // HTMLCollection[...], 2
const itemsByTagName = document.getElementsByTagName('li')
console.log(`itemsByTagName`, itemsByTagName) // HTMLCollection[...], 2

console.log('---')

// Create element for append to stack
const elementToAppend = document.createElement('li')
elementToAppend.className = 'element added'
elementToAppend.innerText = 'Item 3'
const stackTarget = document.querySelector('.stack') // Append target
stackTarget.append(elementToAppend)

// After logging
console.log(`itemsByQuerySelector`, itemsByQuerySelector) // NodeList[...], 2 
console.log(`itemsByClassName`, itemsByClassName) // HTMLCollection[...], 3
console.log(`itemsByTagName`, itemsByTagName) // HTMLCollection[...], 3
