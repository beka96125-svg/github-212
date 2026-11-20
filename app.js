const a =  document.getElementById("a");
const b =  document.getElementById("b");


const results =  document.getElementById("results");
let regEx = "<br />";


const plus = document.getElementById("plus");


plus.addEventListener("click",function(){
results.innerHTML += `${ a.value} + ${ b.value} = ${Number(a.value) + Number(b.value)} ${regEx}`;
});
const minus = document.getElementById("minus");

minus.addEventListener("click",function(){
results.innerHTML += `${ a.value} + ${ b.value} = ${Number(a.value) - Number(b.value)} ${regEx}`;
});

const more = document.getElementById("more")

more.addEventListener("click",function(){
results.innerHTML += `${ a.value} + ${ b.value} = ${Number(a.value) * Number(b.value)} ${regEx}`;
});

const small = document.getElementById("small")

small.addEventListener("click",function(){
results.innerHTML += `${ a.value} + ${ b.value} = ${Number(a.value) / Number(b.value)} ${regEx}`;
});

const p = document.getElementById("p")

p.addEventListener("click",function(){
results.innerHTML += `${ a.value} + ${ b.value} = ${Number(a.value) ** Number(b.value)} ${regEx}`;
});

const s = document.getElementById("s")

