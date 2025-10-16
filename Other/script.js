'use strict'
//import { juiceMaker } from '../otherHelpers/otherHelper'





//JS Fundamental

//===========================================       // VARIABLES                                                            

/* let name = "Iva"
console.log(name)

let firsName = "pep"
let secName = "tet"

console.log(firsName, secName) */


//===========================================       // OBJECTS AND ARRAYS                                                      


// 
/* var custome = {

    firstName: "papa",
    secName: "butan",
    skinColour: "purple"
    
}

const customer1 = custome.firstName
console.log(customer1) */

                                                        //ARRAYS

/* var car = ["volvo", "Audi", "Tata", "Lada"]

console.log(car[3])

var customer2 = {

    car: car[1],
    firstName: "ork",
    secName: "otava"
}
console.log(customer2.car) */

//===========================================       // Relational and comparisson operators                                                    

/* var result = 10 > 5
console.log(result) // expected true  */

// > - more than 
// < - less than 
// >= - more or equal 
// <= - less or equal 

/* var x = 1 
console.log(x == "1") // loose comparison 
console.log(x === "1") // strict comparison ... not only checks the value but the DATA TYPE TOO 
console.log(x !=="1") // should return faulse and ! will reverce the result /  not equal in this case  
*/

//===========================================       // Logical Operators                     

//Logical "AND" / "&&"


//Logical "OR"  / "||"

//===========================================       //Conditional statement "If statement"
                                                    
    /* 
let hour = 17
if ( hour <= 22 && hour >=23){
    console.log("Happy days we can have a party!")
}else{
    console.log("Too late or early in the day... keep it quiet")
} */

//===========================================       // LOOPS

// FOR LOOP 

/* for(let i = 0; i <=10; i++){
    console.log("Hello " + i);
} */

                                                    // Loop array 

/* let cars = ["volvo", "Audi", "Tata", "Lada"]

for(let car in cars){
    console.log(car + " " + cars[car]);
} */

//===========================================       // Functions 

//ver1.
/* function hello1(){
    console.log("Hello One")
}

hello1()

//ver 2 

function calcAge(curYear, yearBorn){
    const age = curYear - yearBorn
    return age
}
console.log(calcAge(2025,1982));

//ver3. 

let ageCalculator = function(curYear, yearBorn){
    const age = curYear - yearBorn
    return age
}
console.log(ageCalculator(2025,1982));

//const juice1 = juiceMaker(3,5) */

//===========================================       // Classes and Methods 

class CustomerDetails{
    printFirstName(firstName){
        console.log(firstName)
    }

    printSecondName(secondName){
        console.log(secondName)

    }

    printCustomerAge(birthdayYear){
        let currentAge = 2025 - birthdayYear
        console.log(currentAge)
    }

    /* printSecondName(secondName){
        printSecondName(secondName){
            console.log(secondName)
        }
        
    }

    customerAge(birthDay){
        let currentAge = 2025 - birthDay
        console.log(currentAge);
    } */
}

let customerDetail = new CustomerDetails()

customerDetail.printFirstName("Daniel")
customerDetail.printSecondName("Vasev")
customerDetail.printCustomerAge(1982)