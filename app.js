console.log("HOMEWORK 1");

let users = [
    'Musa, 2000',
    'Orxan, 2008',
    'Yusif, 1999',
    'Nihad, 2008',
    'Kamil, 2009',
    'Amin, 2003',
];

function sortByBirth(arr) {
    return arr.sort((a, b) => {
        let aYear = +a.split(', ')[1];
        let bYear = +b.split(', ')[1];
        return aYear - bYear;
    });
}
console.log(sortByBirth(users));

console.log("HOMEWORK 2");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function countEvensAndOdds(numbers) {
    let evenCount = 0;
    let oddCount = 0;
    numbers.forEach(num => {
        if (num % 2 === 0) {
            evenCount++
        }
        else {
            oddCount++
        }
    });
    return { even: evenCount, odd: oddCount };
}
console.log(countEvensAndOdds(nums));

console.log("HOMEWORK 3");

function addTax(prices) {
    return prices.map(price => price * (1 + 0.20))
}
let ADV = [100,20,300,40,500,60,700,80,900]
console.log(addTax(ADV));
