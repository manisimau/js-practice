for(let i=1; i<=5; i++) {
    console.log(`For loop iteration: ${i}`);
}

let j=1;
while(j<=5){
    console.log(`While loop iteration: ${j}`);
    j++;
    }

let fruits = ["Apple", "Banana", "Cherry"];
for(let i=0; i<fruits.length; i++){
    console.log(`I like ${fruits[i]}`);
}

for(i=1; i<=10; i++){
    if(i%2 === 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
}

for(i=10; i>=1; i--){
    console.log(`Countdown: ${i}`);
}

let dishes = ["Pasta", "Pizza", "Salad", "Soup", "Steak"];
while(dishes.length > 0){
    console.log(`Show: ${dishes.shift()}`);
}

for(let i=1; i<=20; i++){
    if(i%3 ===0) {
        console.log(`${i} is divisible by 3`);
    }  
}

let cars = ["Toyota", "Honda", "Ford", "BMW", "Audi"];
for(let i=0; i<cars.length; i++){
    if(cars[i].includes("a") || cars[i].includes("A")) {
        console.log(`Found 'a' in ${cars[i]}`);
    }
    else {
        console.log(`No 'a' in ${cars[i]}`);
    }
}
