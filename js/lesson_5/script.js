const search = "bla bla bla, find me, bla bla bla";
const find = "find me";
const error = "Nastia";

function blaBla (s, f) {
    let res = s.indexOf(f);
    if (res >= 0) {
        return res;
    } else {
        return "There is not " + f + " in the initial string.";
    }
}

console.log(blaBla(search, find));
console.log(blaBla(search, error));


function iDontKnowJS (str, bla) {
return str.split(bla).length-1;
}
console.log(iDontKnowJS (search, "bla"));