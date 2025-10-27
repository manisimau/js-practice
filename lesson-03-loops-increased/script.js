for(i=1; i<=20; i++) {
    console.log(`Iteration number: ${i}`);
}

let j = 1;
while(j<=20) {
    console.log(`While loop iteration number: ${j}`);
    j++;
}


for(n=1; n<=50; n++) {
    if(n%2 === 0) {
        console.log(n);
    }
}

let sum=0;
for(m=1; m<=100; m++) {
    sum += m;
}
console.log(`The sum of numbers from 1 to 100 is: ${sum}`);

let secondSum=0;
i=1;
while(i<=100){
    secondSum += i;
    i++;
}
console.log(`Current sum is: ${secondSum}`);

let array = [2, 5, 8, 3, 10];
for(i=0; i<array.length; i++) {
    if(array[i] > 5) {
        console.log(array[i]);
}
}

let secondArray = [2, 5, 8, 3, 10];
z=1;
while(z<secondArray.length) {
    if(secondArray[z] > 5) {
        console.log(secondArray[z]);
    }
 z++;
}


let newArray = [1, 2, 3, 4, 5];
thirdSum = 0;
for(i=0; i<newArray.length; i++) {
    thirdSum += newArray[i];
    console.log(thirdSum);
}

let anotherArray = [1, 2, 3, 4, 5];
fourthSum = 0;
k=0;
while(k<anotherArray.length) {
    fourthSum += anotherArray[k];
    console.log(fourthSum);
    k++;
}
    














