// 1. Clean the room function: make a function that organizes these into individual array that is ordered. 


//input array
const input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

//sorting the array from small to big no.
input.sort((a, b) => a-b);

console.log(input);
// input array after sorting = [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]

// make 2 empty arrays, a temporary one for the same value numbers and a final one for the final array.
let tempArr = [];
const finalArr = [];

// map method that goes through each number in the array and we also gets an index
// we compare the next number with the previous one and if same value will push number to tempArr.
// in the first run it will look like [1,1,1]

input.map((num, i) => {
if (input[i+1] === num) {
	tempArr.push(num);
} 

// we compare the previous number with the next one to make sure we compare all numbers
// then we push the last no. to the tempArr. and now that we are done push the 
// tempArr that in the first run looks like this [1,1,1,1] to the finalArr and make the tempArr empty.

else if (input[i-1] === num) {	
	tempArr.push(num);	
	finalArr.push(tempArr);
	tempArr = [];
}

// else, if we read any other numbers just add them to the final array as they are single numbers.

else {
	finalArr.push(num);
}
});

console.log(finalArr);
// finalArr will look like this: [[1,1,1,1],[2,2,2],4,5,10,[20,20],391,392,591]] 


// BONUS: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const input2 = ["4",4,1,4,"3",2,"3","2",5];

//sorting the array from small to big no.
input2.sort((a, b) => a-b);

console.log(input2);
// input will now be [1, 2, "2", "3", "3", "4", 4, 4, 5];

const noArr = [];
const stringArr = [];
let tempoArr = [];
const finalNoArr = [];
const finalStringArr = [];
const finishArray = [];

// sorting the numbers and strings in 2 different arrays
for (number of input2) {
	if (typeof number === 'number') {
		noArr.push(number);
	}
};
// we get noArr=[1, 2, 4, 4, 5]

for (number of input2) {
	if (typeof number === 'string') {
		stringArr.push(number);
	}
};
//we get stringArr=["2", "3", "3", "4"]

// first we go through the number array and we pair any double numbers and store them 
// in the finalNoArr will look like [1, 2, [4, 4], 5]
noArr.map((num, i) => {
if (noArr[i+1] === num) {
	tempoArr.push(num);
} 

else if (noArr[i-1] === num) {	
	tempoArr.push(num);	
	finalNoArr.push(tempoArr);
	tempoArr = [];
}

else {
	finalNoArr.push(num);
}
});

// second we go through the string array and we pair any double numbers and store them 
// in the finalStringArr will look like ["2", ["3", "3"], "4"]
stringArr.map((num, i) => {
if (stringArr[i+1] === num) {
	tempoArr.push(num);
} 

else if (stringArr[i-1] === num) {	
	tempoArr.push(num);	
	finalStringArr.push(tempoArr);
	tempoArr = [];
}

else {
	finalStringArr.push(num);
}
});

// Finally we combine the 2 final number and string arrays.
finishArray.push(finalNoArr);
finishArray.push(finalStringArr);

console.log(finishArray);
// We get [[1, 2, [4, 4], 5], ["2", ["3", "3"], "4"]]