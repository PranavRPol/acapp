function calculateArea() {
    const shape = document.getElementById('shape').value;
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const input3 = parseFloat(document.getElementById('input3').value);
    const resultElement = document.getElementById('result');

    // Validate inputs
    if (isNaN(input1) || isNaN(input2) || isNaN(input3) || input1 <= 0 || input2 <= 0 || input3 <= 0) {
        alert('Invalid input. Please enter positive numbers.');
        return;
    }

    let area;

    // Calculate area based on the selected shape
    switch (shape) {
        case 'rectangle':
            area = input1 * input2;
            break;
        case 'triangle':
            area = 0.5 * input1 * input2;
            break;
        case 'square':
            area = input1 * input1;
            break;
        case 'circle':
            area = Math.PI * input1 * input1;
            break;
        default:
            alert('Invalid shape selected.');
            return;
    }

    // Display the result
    resultElement.innerText = `Area: ${area.toFixed(2)}`;
}
