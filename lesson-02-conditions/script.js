let age = 15;
let hasDrivingLicense = true;
let hasCar = false;
let hasParrentPermission = true;

if (age >= 18 && hasDrivingLicense && hasCar ) {
    console.log("You can drive");
} else if (age >= 18 && hasDrivingLicense && !hasCar) {
    console.log("You can drive, but you don't have a car.");
} else if (age >= 16 && !hasDrivingLicense && hasParrentPermission) {
    console.log("You can drive with parental permission.");
} else if (age < 16 || !hasCar && !hasDrivingLicense) {
    console.log("You cannot drive.");
}