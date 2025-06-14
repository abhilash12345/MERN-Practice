// callbacks

// const print =(txt)=>{
//     console.log("---------------")
//     console.log("----",txt)
//     console.log("---------------")

// }

// const add = (a,b)=>{
//     const ans = a + b
//     return ans
// }

// const multi = (a,b)=>{
//     const ans = a * b
//     return ans
// }

// // const result = add(20,70)
// // print(result)


// // const result2 = add(2000,79000)
// // print(result2)

// const result = add(400,300)
// const final_result = multi(result,1.18)
// print(final_result)

// -----------------------------------------

// callback is a function that is paases as a argument to another function.
// wheneever there is a call back function there is higher order function.
// HOF is a function that accept anothe function as a parameter.
const print =(txt)=>{
    console.log("---------------")
    console.log("Please pay your bill")
    console.log("----",txt)
    console.log("---------------")

}

const ans = 10

const calculateBill = (a,b,cb)=>{
    const amount = a + b
    const res = cb(amount) 
    return res  // function invokation or call
}

const multi = (a,b)=>{
    const ans = a * b
    return ans
}

const foodBill = (baseAmount)=>{ 
     // it is not higher order function and not call back function as not takeing argument
     const ans = multi(baseAmount,1.05)
     return ans
}

const drinkBill = (baseAmount) =>{
    const ans = multi(baseAmount,1.30)
    return ans
}

// const result = add(20,70)
// print(result)


// const result2 = add(2000,79000)
// print(result2)

 calculateBill(400,300,drinkBill)

 // spent 300rs on starters and 400 rs on main course (food)
 // spend 200rs drink1 and 500 on drink2

 calculateBill(calculateBill(300,400,foodBill),calculateBill(200,500,drinkBill),print)

