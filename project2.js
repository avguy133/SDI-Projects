alert("JavaScript works!!!");

// Activity: Boolean Logic
//var p = true, q = false, r = false;
// Given: (p and q) or r
// if ((p && q) || r) {
//     console.log("The expression is true");
//  } else {
//     console.log("The expression is false");
// }

var p = true, q = false, r = false;

console.log("Given p = true, q = false, r = false,");
// for p and (q or r), example..
if ((p && q) || r) {
    console.log("The expression 'p and (q or r)' is true");
} else {
    console.log("The expression 'p and (q or r)' is false");
}

// for (p and not q) or (q and r), example..
if ((p && !q) || (q && r)) {
    console.log("The expression '(p and not q) or (q and r)' is true");
} else {
    console.log("The expression '(p and not q) or (q and r)' is false");
}

// for not(p or r), example..
if (!(p || r)) {
    console.log("The expression 'not(p or r)' is true");
} else {
    console.log("The expression 'not(p or r)' is false");
}
