// document.getElementById("count").innerText = 5

//------excersise-------//
// let count = 5
// count = count + 1
// console.log(count)

//------excersise-------//
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

//------excersise-------//
// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// let num = 42;
// function number(){
//     console.log(num);
// }
// number();

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// Create a function that logs out the sum of all the lap times

// function lapTime() {
//     let totalLapTime = lap1+lap2+lap3
//     console.log(totalLapTime)
// }
// lapTime()


//let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// let countEl = document.getElementById("count-el")
// console.log(countEl)

// let count = 0

// function increment(){
//     count = count + 1
//     countEl.innerText = count
// }

// //------self tried for decrement------
// let countEl1 = document.getElementById("count-el")
// let count1 = count
// function decrement() {
//     count1 = count - 1
//     countEl1.innerHTML = count1
// }


//grab the count-el element, store it in a countEl variable
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     // set countEl's innerText to the count
//     countEl.innerText = count
// }
// // 1. Create a function, save(), which logs out the count when it's called

// function save() {
//     console.log(count)
// }

// let username = "per"

// // Create a variable, message, that stores the string: "You have tree new notifications"

// let message = "You have tree new notifications"
// var a = console.log(message)
// console.log(username)

// // Create a variable, messageToUser, that contains the message we have logged

// let messageToUser = message +","+ username +"!"
// console.log(messageToUser)

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = "PRATHEEKSHA"
// let greeting = "Hi, my name is"
// let myGreeting = greeting +" "+ name 
// console.log(myGreeting)

// let name = 42
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(4 + 5) // 9
// console.log("2" + "4")//24
// console.log("5" + 1)//51
// console.log(100 + "100")//100100

// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Pratheeksha Shastri"
// let greeting = "Welcome back"

// welcomeEl.innerText = greeting +" "+ name

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    count = 0
    countEl.textContent = 0
    console.log(count)
}







