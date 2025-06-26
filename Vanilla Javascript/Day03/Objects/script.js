// const student1 = {
//     name: "Abhilash",
//     age: "28",
//     1: "Dhanbad",
//     blood_group: "A+",
//     "ssd":"386236",
//     name:"Hemant" //cascading (key can not be have repeated name)
// }

// console.log(student1.name)

// key should be valid identifier - > variable naming convention


// key should be always string or symbol

// const laptop ={
//     os:"macos",
//     brand:"apple",
//     screensize:"13 inch"
// }

// console.log(laptop)
// laptop.features = "none"
// const key = prompt("what do you want to add")
// console.log("key:",key)

// const value = prompt(`what is the value for ${key}`)
// console.log("Value:",value)

// laptop[key] = value

// console.log("your new object is here",laptop)


// key should always be string and symbol 

// value can be anything

// value is changes if key is present and new key value will be inserted if not present.


// squares are more powerful

//---------------------------------------------------------------------------------------------------


// const laptop ={
//     os:"macos",
//     brand:"apple",
//     screensize:"13 inch",
//     ram:"8 GB"
// }


// console.log(laptop)
// const k = prompt("what do you want to delete")
// delete laptop[k]

// console.log(laptop)

//----------------------------------------------------------------------------------------------------------------


// age = 22
// const Abhilash ={
//     name: "abhilash Singh",
//     age:21,
//     isGraduated:false,
//     information:  function (){
//         console.log("------------")
//         console.log(this.isGraduated)
//         console.log("------------")
//     }

// }

// -----------------------------------------------------------------------------

const Ramesh = {
    name: "Abhilash Singh",
    marks:{
        english:80,
        Math:55,
        Hindi:98,
        Sanskrit:99

    },
    college:"IIT",
    city:"Dehradun"


}


// for (let i in Ramesh){
//     console.log(i)
// }


const allkeys = Object.keys(Ramesh)
console.log("allKeys",allkeys)

const allvalues = Object.values(Ramesh)
console.log("allvalues",allvalues)

const allentries = Object.entries(Ramesh)
console.log("allEntries",allentries)

