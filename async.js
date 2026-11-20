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

/*
JavaScript Promise
------------------
A promise is a javascript object that represents the result
of an operation that may finish later.

A promise has 3 states:
1. Pending: The operaiton is still in progress
2. Fullfilled: The operations completed successfully using resolve()
3. Rejected: The operations failed using reject()
*/

// function prepareCertificate(studentName, callback) {
//     console.log("Preparing certificate for " + studentName);

//     setTimeout(() => {
//         callback(studentName);
//     }, 3000);
// }

// function certificateReady(name) {
//     console.log(name + "'s certificate is ready!");
// }
// prepareCertificate("Abdulrahman", certificateReady)
// console.log("In progress.....")

let myPromise = new Promise((resolve, reject) => {
    resolve("Success!");
    //reject("Sorry, failed!");
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Successfully completed."));


// let mark = 25;

// let result = new Promise((resolve, reject) => {
//     if(mark >= 50)
//         resolve("Passed!");
//     else
//         reject("Failed");
// });

// result
//     .then(message => console.log(message))
//     .catch(error => console.log(error))
//     .finally(() => console.log("End!"));

// let certificate = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve("Certificate ready!");
//     // }, 2000);
//     setTimeout(() => {
//         reject("Sorry, certificate is not ready!");
//     }, 2000);
// });

// console.log("Preparing certificate.....");
// certificate
//     .then(message => {console.log(message);})
//     .catch(error => {console.log("Error issuing certificate");})
//     .finally(() => {console.log("Request completed!")});
