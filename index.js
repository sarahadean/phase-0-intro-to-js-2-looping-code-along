// Code your solutions in this file
//for (let age = 30; age < 40; age++){
  //  console.log(`I'm ${age} years old. Happy birthday to me!`)
//}

// const myGifts = ["teddy bear", "drone", "doll"];
// const moreGifts = ["Barbie", "dollhouse", "Paw Patrol"];



// function wrapGifts(arrayOfGifts){
//    for (let i = 0; i < arrayOfGifts.length; i++){
//        console.log(`Wrapped ${arrayOfGifts[i]} and added a bow!`)
//        //debugger
//     }
//     return arrayOfGifts
// }

// wrapGifts(moreGifts)

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

// wrapGifts(gifts);


const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(arrayOfNames, event){
  const eventArray = []
    for (let i = 0; i < arrayOfNames.length; i++){
    eventArray.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`)
    debugger
    }
return eventArray
}

writeCards(names, "surprise")

function countDown(startingNumber) {
  let count = startingNumber
  while (count > -1)
  console.log(count--)
}
