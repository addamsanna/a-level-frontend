function findVowelsCount(inputString) {
    let vowels = "aeiouy";
    let inputStringArray = inputString.split("");
    let count = 0;
    for (let bla of inputStringArray) {
        if (vowels.indexOf(bla) !== -1) {
            count = count + 1;
        }
    }
    return count;
}
console.log(findVowelsCount("Hello"));


//Первая попытка
const createArrayWithObjects = (name1, name2) => {
    let obj1 = {
        name: "Anna",
        id: 1,
    };
    let obj2 = {
        name: "Pharaon",
        id: 2,
    };
    for (const [key, value] of Object.entries(obj1)) {
        console.log(`${key}: ${value}`);
    }
    for (const [key, value] of Object.entries(obj2)) {
        console.log(`${key}: ${value}`);
    }
};
createArrayWithObjects();

//Вторая попытка
let arrayWithNames = ["Anna", "Alice"];

function createArrayWithObjects(name1, name2) {
    console.log(`name: ${name1}, id: ${name2}`);
}
arrayWithNames.forEach(createArrayWithObjects);

//Третья попытка
let arrayWithNames = ["Anna", "Alice"];
function createArrayWithObjects(name1, name2) {
    console.log(`name: ${name1}, id: ${1}`);
    console.log(`name: ${name2}, id: ${2}`);
}
createArrayWithObjects("Alla", "Alice");

//Четвертая попытка
var names = ["Anna", "Alice"];
var doubles = names.map(function (name1, name2) {
    console.log(`name: ${name1}, id: ${name2}`);
    return name1, name2;
});

//3
//и снова первая попытка
let numbers = [2, 4, 5, 7, 12];
let filterArray = numbers.map((arr, conditionNumber) => arr > 10);
console.log(filterArray);

//вторая
function filterArray(arr, conditionNumber) {
    let numbers1 = [];
    arr.forEach((num)=> {
        if (num > conditionNumber) {
            numbers1.push(num);
        }
    });
    return numbers1;
}
console.log(filterArray([2, 4, 5, 7, 12], 7));

//третья
function filterArray(arr, conditionNumber) {
    let arr1 = arr.filter((num)=> {
        if (num >= conditionNumber) {
            return true;
        } else { 
            return false;
        }
    });
    return arr1;
}
console.log(filterArray([2, 4, 5, 7, 12], 7));