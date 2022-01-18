const namesOfDays = {
    ru: [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье",
    ],
    eng: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
};

const getNameOfDay = (day, lang) => {
    if (lang === undefined) {
        return namesOfDays.eng[day - 1];
    }
    return namesOfDays[lang][day - 1];
};

console.log(getNameOfDay(7, "eng"));
console.log(getNameOfDay(2));

//2
const sitiesAndCountries = {
    Kyiv: "Ukraine",
    Washington: "USA",
    Odessa: "Ukraine",
    Munich: "Germany",
    Kharkiv: "Ukraine",
    "New-York": "USA",
    Amsterdam: "Netherlands",
    Berlin: "Germany",
    Chicago: "USA",
    Lisbon: "Portugal",
    Lviv: "Ukraine",
    Hamburg: "Germany",
};

const counriesData = {};

function foundKey() {
    for (let key in sitiesAndCountries) {
        let country = sitiesAndCountries[key];
        if (counriesData[country] === undefined) {
            counriesData[country] = [];
        }
        counriesData[country].push(key);
    }
}
foundKey();
console.log(counriesData);

//3
const calcSumOfMinNumbers = (arr) => {
    let result = arr.sort((a, b) => a - b);
    return result[0] + result[1];
};
console.log(calcSumOfMinNumbers([9, 12, 14, 22, 1]));
