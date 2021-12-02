let number = 10;
console.log(10/0);
Infinity

console.log("string" * 9);
NAN

const persone = "Alex";

const object = {
    name: "Anastasiia",
    age: 23,
    isMarried: false
};
console.log (object.age);
console.log (object["age"]);
console.log (object.name);

alert ("Hello");

const result = confirm ("Do you like coffee?");

const answer = prompt("Maybe, we can buy coffee?", "Of course, Nastia");

const answers = [];
answers [0] = prompt ("Bla?", "");
answers [1] = prompt ("Bla bla?", "");
answers [2] = prompt ("Bla bla bla?", "");

document.write(typeof(answers));

const myName = `Anastasiia`;

const str11 = "My name is" + myName + ", I am learning JS";
const str12 = `My name is ${myName}, I am learning JS`;
const str13 = 'My name is' + myName + ', I am learning JS';

console.log(myName);
console.log(str11);
console.log(str12);
console.log(str13);

const object = {
    name: "Anastasiia",
    age: 23,
    say: function (){
        alert("hey")
    }
};

