// convert mass from grams to kg
// convert height from inches to meters

// Tom mass is 8 g = 0.008 kg
// Tom height is 9 inches = 0.2286 m
// Jerry mass is 45 g = 0.045 kg
// Jerry height is 10 inches = 0.254 m

// BMI forumla is mass / height * height

const massTom = 0.008;
const heightTom = 0.2286;
const tomBMI = massTom / (heightTom ** 2);
// Tom's BMI is 0.15

const massJerry = 0.045;
const heightJerry = 0.254;
const jerryBMI = massJerry / (heightJerry ** 2);
// Jerry's BMI is 0.69

const tomResult = true;
const tomNotResult = false; 

if (tomBMI > jerryBMI) {
    // return tomResult;
    console.log(`Is Tom's BMI higher than Jerry's? ${tomResult}`);
} else {
    console.log(`Is Tom's BMI higher than Jerry's? ${tomNotResult}`);
}

// When Jerry's BMI is higher than Tom's BMI it will print true
// if (jerryBMI > tomBMI) {
//     console.log(`Is Tom's BMI higher than Jerry's? ${tomResult}`);
// } else {
//     console.log(`Is Tom's BMI higher than Jerry's? ${tomNotResult}`);
// }

