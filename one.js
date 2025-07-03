const isUserLOggedIn = true
const temperature = 41


if ( temperature === 40){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
    
}

const balance = 100

if (balance > 500) console.log("test");console.log("test2");console.log("test3");

/*
if (balance > 500) {
    console.log("test");
} else {
    console.log("test2");
}
*/

const month = "march"

switch (month){
    case "jan":
        console.log("1");
    break;
    case "feb":
        console.log("2");
    break;    
    case "march":
        console.log("3");
    break;    
    case "april":
        console.log("4");
    break;
    default:
        console.log("default case match")
        break;
}