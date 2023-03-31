// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

const batch2 =[invalid2, invalid4, invalid5,]

// Add your functions below:
//Find valid cards using equation
const validateCred = arr =>{
  let sum= 0;
  //calculate sum of digits
  for (let i=arr.length-1; i>=0; i--){
    if (i % 2 !== 0){
      sum = sum + arr[i];
    } else if (arr[i]*2 < 10) {
      let x= arr[i]* 2;
      sum = sum + x;
      } else {
        let y = arr[i]* 2 -9;
        sum = sum + y;
      }
 //calculate if sum is divisible by 10      
  }; 
  let newSum = sum;
  if (newSum % 10 === 0){
    return true;
  } else {
    return false;
  };
};
//Find invalid cards
const findInvalidCards= arr => {
  let invalidCards =[];
  for (let i=0; i<arr.length; i++){
    let x = validateCred(arr[i]);
    if (x === false){
      invalidCards.push(arr[i]);
    }
  };
  return invalidCards;
};
//Find Companies
const idInvalidCardCompanies = arr =>{
  // to store the companies
  let cardCompanies= [];
  //iterate thru the arrays
  for (let i=0; i<arr.length; i++){
 //if...else if statements to push names into empty cardCompanies array   
    if (arr[i][0]=== 3 && cardCompanies.indexOf('Amex')===-1){
      cardCompanies.push('Amex');
    } else if (arr[i][0]=== 4 && cardCompanies.indexOf('Visa')===-1){
      cardCompanies.push('Visa');
    } else if(arr[i][0]=== 5 && cardCompanies.indexOf('Mastercard')=== -1){
      cardCompanies.push('Mastercard')
    } else if(arr[i][0]=== 6 && cardCompanies.indexOf('Discover')=== -1){
      cardCompanies.push('Discover');
    } 
 /*i was running into an issue where it was printing 'company not found' for all the rduplicates, so this line is to only filter for cards with numbers that dont fall into the range*/   
    else if(arr[i][0]>6 || arr[i][0]< 3) {
     cardCompanies.push('Company Not Found!');
    }
  };
  return cardCompanies;
}

const stringToNumber = str =>{
  let newArray=[];
  for (let i=0; i<str.length; i++){
    newArray.push(str[i]);
  };
  return newArray;
};

/*console.log(validateCred(valid2));
console.log(findInvalidCards(batch))
console.log(idInvalidCardCompanies(batch));
z='3456789001235839';
console.log(stringToNumber(z));*/
console.log('Learning Git')
console.log('Lets make an edit on the original file')
console.log('it should show up in the new app')
console.log('make changes, push to WC, push to GH')

