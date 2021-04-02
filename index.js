// Code your solution in this file!
function distanceFromHqInBlocks(b){
    let value;
    value = b-42;
    return Math.abs(value);
}

function distanceFromHqInFeet(f){
    let value2;
    value2 = (f-42)*264
    return Math.abs(value2)
}

function distanceTravelledInFeet(d, t){
    let value3;
    value3 = (t-d)*264
    return Math.abs(value3)
}

function calculatesFarePrice(start, end){
    const distanceTravelled = distanceTravelledInFeet(start, end);
    if (distanceTravelled < 400) {
        return 0;
    } else if (distanceTravelled >= 400 && distanceTravelled < 2000) {
        return 2.56;
    } else if ((distanceTravelled >= 2000) && (distanceTravelled <= 2500)) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
