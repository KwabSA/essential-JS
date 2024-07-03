// Defining variables and function to calculate grocery items

let grocery1;
let grocery2;
let grocery3;


const groceryTracker = () => {
    // Capture the value of the input fields and convert to float
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);

    // Calculate the total baseed on the transformed input values
    let totalAmount = grocery1 + grocery2 + grocery3;

    // Display the total amount in the element with id, grocerAmount
    document.getElementById('groceryAmount').innerHTML = `The Total Amount is: $${totalAmount}`;
}
