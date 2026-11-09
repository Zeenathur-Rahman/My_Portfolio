/*
    Synchronous Vs Asynchronous
    Task A -> Task B -> Task C
    setTimeout() - schedules a function to run after a specified minimun delay
    setTimeout(callbackFunction, delayInMilliseconds)
    Promises (resolve() and reject())
*/
// console.log("Step 1: Receive Assignment");
// setTimeout(() => {
//   console.log("Step 2: Assignment Downloaded!");  
// }, 2000);
// console.log("Step 3: Review Assignment");
// console.log("Step 4: Provide Feedback!");

// function greet(name) {
//     console.log("Hello " + name);
// }
// function greeting(name) {
//     console.log(name + " Welcome to Javascript Class!");
// }
// function processStudent(callback) {
//     callback("Zeenath");
// }

// processStudent(greet);

// function downloadComplete() {
//     console.log("File Donwloaded Sucessfully!");
// }
// console.log("Stating donwload.....");
// setTimeout(downloadComplete, 2000);
// console.log("You can continue reviewing.");

function prepareCertificate(studentName, callback) {
    console.log("Preparing certificate for " + studentName);

    setTimeout(() => {
        callback(studentName);
    }, 3000);
}

function certificateReady(name) {
    console.log(name + "'s certificate is ready!");
}
prepareCertificate("Abdulrahman", certificateReady)
console.log("In progress.....")