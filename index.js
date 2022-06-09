// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(){
    const twoDrivers= drivers.slice(0,2);
    return twoDrivers;
}

function returnLastTwoDrivers(drivers){
    const lastTwoDrivers= drivers.slice(-2);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(x){
    return x=> x*x;
} 

const fareDoubler = x => x*2;


const fareTripler = x => x*3;

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}



