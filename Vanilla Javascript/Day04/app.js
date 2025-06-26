// console.log(window.document)
// console.dir(window.document)
// console.dir(window.document.body)


//--------------------------------------------
// 1. getElementsByTagName -->> it return a html collection 

// const headings = document.getElementsByTagName("p")
// console.log(headings)

// const secondheadings = headings[1]

// secondheadings.innerText = "Hello from DOM"
// secondheadings.style.padding = "1rem"
// secondheadings.style.backgroundColor = "red"

//----------------------------------------------------------

// 2. getElementsByClassName 

// const elem = document.getElementsByClassName('text-brown')
// console.log(elem)



// setTimeout(()=>{
// for (let i of elem){
//     i.style.color = 'red'
// }
// },5000)

// --------------------------------------------------------------------

// 3. getELementById - it resturns single element

// const firstTitle = document.getElementById('title-dom')
// firstTitle.style.textDecoration = "overline"

//--------------------------------------------------------------

//  4. queryselector  (more powerful) -->it resturn node list basicallyt 

const elements1 = document.querySelectorAll('a')
console.log(elements1)

const elements2 = document.querySelectorAll('.text-brown')
console.log(elements2)

const elements3 = document.querySelectorAll('#title-dom')
console.log(elements3)

const elements4 = document.querySelectorAll('p > a')
elements4[0].style.backgroundColor = 'yellow' // need to put 0 as it is iterable

//---------------------------------------------
// querySelectorAll

// const elements11 = document.querySelector('a')
// console.log(elements11)

// const elements21 = document.querySelector('.text-brown')
// console.log(elements21)

// const elements31= document.querySelector('#title-dom')
// console.log(elements31)

// const elements41= document.querySelector('p > a') // can access directly 

// elements41.style.backgroundColor = 'yellow'  



// ------------------------------------------------------------------------------------------------

// creating elements

