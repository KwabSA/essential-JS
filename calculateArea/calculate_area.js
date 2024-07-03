// Defining variables and function to calculate area

let length;
let width;

const calculateArea = () => {
    // Capture the value of the input fields and convert to float
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    // Calculate the area baseed on the transformed input values
    let area = length * width;

    // Display area in the element with id, result
    document.getElementById('result').innerHTML = `The Area of the Rectangle with the Length of ${length} and the Width of ${width} is: ${area}`;
}