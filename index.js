//test 1
function distanceFromHqInBlocks(distance){
    const hqLocation = 42;
    return Math.abs(distance - hqLocation);

}
//test 2
function distanceFromHqInFeet(distance){
    const hqLocation = 42;
    const hqLocationInFeet = 264;
    return Math.abs(distance - hqLocation) * hqLocationInFeet
}


//test 3
function distanceTravelledInFeet(start, destination){
    const feetInBlocks = 264
    return Math.abs(destination - start) * feetInBlocks
}

//test 4

function calculatesFarePrice(start, destination){
    const feetInBlocks = 264
   const distance = Math.abs(destination - start);
   const distanceInFeet = distance * feetInBlocks
    if (distanceInFeet <= 400){
        return 0;
    }
    else if (distanceInFeet <= 2000){
        return Math.abs(distanceInFeet - 400) * .02
    }
    else if (distanceInFeet <= 2500){
        return 25
    }
    else if (distanceInFeet > 2500){
        return 'cannot travel that far'
    }

    }
