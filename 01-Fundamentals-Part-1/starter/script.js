////////// CODING CHALLENGE 1

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);


/////////// CODING CHALLENGE 2

if (markHigherBMI) {
    console.log('Mark\'s BMI is higher than John\'s!');
} else {
    console.log('John\'s BMI is higher than Mark\'s!');
}

if (markHigherBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Marks(${markBMI})!`);
}