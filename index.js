// do-while loop

// do{

// }while(end)


// let i=12;
// do{
//     console.log(i)
//     i++
// }while(i<2)

//to break or stop a loop
// for(let i=1; i<120; i++ ){
//  console.log(i)
//     if(i===50){
//         break
//     }
// }
// output--> 50

//to skip a number from between a loop we use continue
// for(let i=1;i<=120;i++){
//     if(i===20){
//         continue
//     }
//     console.log(i)
// }
//output--> 20 will be missing from the loop

//practice queations 
//print numbers from 1 to 10 using for loop
// for(let i=1;i<=10;i++){
//     console.log(i)
// }

//print numbers from 10 to 1 using while loop


//while loop
//start
// while(end){
//code
//change
// }



// let i=11;
// while(i>1){
// i--
// console.log(i)
// }

// -print even numbers from 1 to 20 using for loop
// for(let i=1; i<21; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// print odd numbers from 1 to 15 using while loop
// let i=1;
// while(i<16){
// if(i%2===1){
// console.log(i)
// }
// i++
// }
// print the multiplication table of 5(e.g 5*1=5...5*10=50)
// for(let i=1;i<11;i++){
//     console.log(`5 * ${i} = ${5*i}`)
// }
// find the sum of numbers from 1 to 100 using a loop
// let sum=0;
// for(let i=1; i<101;i++){
//     sum=sum+i
// }
// console.log(sum)
// Print all numbers between 1 to 50 that are divisible by 3
// for(let i=1; i<51; i++){
//     if(i%3===0){
//         console.log(i)
//     }
// }
// 8-Ask the user for a number and print whether each number from 1 to that number is even or odd(e.g 1 is odd, 2 is even)
// let value=prompt("Type any Number")
// for(let i=1 ; i<=value; i++){
//     if(i%2===0){
//         console.log(`${i} is even number`)
//     }else{
//         console.log(`${i} is odd number`)
//     }
// }

// 9-count how many numbers between 1 to 100 are divisible by both 3 and 5

// for(let i=1;i<101;i++){
//     if(i%3===0 && i%5===0){
//         console.log(i)
//     }
// }
// 10-Stop at first multiple of 7 .Write a loop of 1 to 100 that: 1-Prints each number 2-Stops completely after it finds the first number divisible by 7

// for(let i=1; i<101; i++){
//         console.log(i)

//     if(i%7===0){
//         break
//     }
// }
//11- // write a loop from 1 to 20 that:
// •    Skips numbers divisible by 3
// •    Prints all others

// 💡 Use continue

// Expected output:
// 1 2 4 5 7 8 10 11 ... (no 3, 6, 9, etc.)
// for(let i=1; i<21;i++){
//     if(i%3===0) continue;
//     console.log(i)
// }
// // Q3: Print First 5 Odd Numbers Only

// Write a loop from 1 to 100 that:
// •    Prints only 5 odd numbers
// •    Then stops the loop

// 💡 Use both if, continue, and a counter + break

// Expected output:
// 1 3 5 7 9

// let count=0;
// for(let i=1;i<101; i++){
//     if(i%2===1){
//         count++
//         console.log(i)
//     }

//     if(count === 5) break;
// }


// Functions
let hyhy= function(){
    console.log("heheyehyeheye")
}
hyhy()


//Function declaration
// function abcd(){
   
// }