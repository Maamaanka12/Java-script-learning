//Three friends bought a pizza that has 10 slices. They want to share it equally.
//  Write a program that calculates how many slices each friend gets and how many slices remain after sharing.

let freinds = 3
let pizza_slices = 10
let piceces = parseInt(pizza_slices/freinds)
let remain = pizza_slices%freinds
console.log('each freind gets '+piceces + ' slices')
console.log('slices remaining are ' +remain)