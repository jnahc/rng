console.log (`yup`);




$(`button`).click(function(){
let rng = Math.round(Math.random()*100)
$(`.rng`).empty();
$(`.rng`).append(rng)
console.log(`click`)
})