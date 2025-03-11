function findLargest() {
    let input = document.getElementById("numbers").value;
    
    let validNumbers = input.split(",")
    

    let largest = Math.max(...validNumbers);
    document.getElementById("result").textContent = "Largest Number: " + largest;
}
