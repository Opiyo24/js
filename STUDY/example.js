let iceCream = "chocolate";
if (iceCream === "chocolate") {
    alert("yay, I love chocolate ice cream!");
} else {
    alert("Awww, but chocolate is my favorite...");
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

multiply(4, 7);
multiply(20, 20);


document.quarySelector("html").addEventListener("click", function() {
    alert("ouch! Stop poking me!");
})

// Arrow function
document.querySelector("html").addEventListener("click", () => {
    alert("ouch! Stop poking me!");
})


// Switching iomages on an onclick event
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};


function checkData() {
    if (document.form1.threeChar.value.length === 3) {
        return true;
    } else {
        alert(
            `Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`,
        );
        return false;
    }
}


// Switch case statements

switch (fruitType) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound");
        break;
    case "Apples":
        console.log("Apples are $0.32 a pound");
        break;
    case ("Bananas"):
        console.log("Bananas are $0.48 a pound.");
        break;
    case "Cherries":
        console.log("Cherries are $3.00 a pond.");
        break;
    default:
        console.log(`Sorry we are out of ${fruitType}`);
}
console.log("Is there anything ekse you'd like?");


//Try... catch
function getMonthName (mo) {
    mo--; //Adjust the mont number for array index (so that 0=Jan, 11=Dec)
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    if (months[mo]) {
        return months[mo];
    } else {
        throw new Error("InavlidMonthNo");
    } 
}

try {
    // Stetements to try
    monthName = getMonthName(myMonth); //Function could throw exception
} catch (e) {
    monthName = "unknown";
    logMyErrors(e); //Pass exception object to eror handler (ie your own function)
}