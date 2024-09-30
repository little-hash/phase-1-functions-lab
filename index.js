// Code your solution in this file!
function distanceFromHqInBlocks(street){
    const mainstreet = 42;
    return Math.abs(street - mainstreet)
}
function distanceFromHqInFeet(street){
    const feetPerBlock = 264;
    const blocks = distanceFromHqInBlocks(street);
    return blocks * feetPerBlock
}
function distanceTravelledInFeet(start,destination){
    const feetPerBlock = 264;
    const blocksTravelled = Math.abs(destination - start)
    return blocksTravelled * feetPerBlock;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400){
        return 0
    }else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }else if (distance > 2000 && distance <= 2500){
        return 25;
    }else{
        return "cannot travel that far"
    }

}