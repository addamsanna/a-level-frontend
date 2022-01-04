function getMinValue(value1, value2) {
    if (value1 > value2) {
        return value2;
    } else {
        return value1;
    }
}

console.log(getMinValue(8, 2));

function getMinValueSecond(value1, value2, value3) {
    if (value1 > value2) {
        return value2;
    } else if (value1 > value3) {
        return value3;
    } else if (value2 > value3) {
        return value3;
    } else if (value2 > value1) {
        return value1;
    } else if (value3 > value1) {
        return value1;
    } else if (value3 > value2) {
        return value2;
    }
}

console.log(getMinValueSecond(8, 2, 15));

function joinObjects(obj1, obj2) {
    for (let key in obj1) {
        obj2[key] = obj1[key];
    }
    return obj2;
}

console.log(
    joinObjects(
        { name: "Pharaon", age: 2 },
        { firstName: "Nastia", language: "ua" }
    )
);

const user = {
    name: "Nastia",
    age: 23,
};
Object.defineProperty(user, "toString", {
    value: function () {
        return `My name is ${this.name}. I am ${this.age}.` ;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
console.log("String concatenation: "+ user);
Object.defineProperty(user, "valueOf", {
    value: function () {
        return this.age ;
    },
    writable: true,
    enumerable: true,
    configurable: true,
});
console.log(user*10);