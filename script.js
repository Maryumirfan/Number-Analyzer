function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}


function analyzeNumbers() {
    const inputElement = document.getElementById("numbers");
    const numbers = inputElement.value.split(",").map(num => parseInt(num.trim()));
    
    let sum = 0;
    let primeCount = 0;
    let nonPrimeCount = 0;

    for (const number of numbers) {
        if (isPrime(number)) {
            primeCount++;
        } else {
            nonPrimeCount++;
        }
        sum += number;
    }

    const percentage = (primeCount / numbers.length) * 100;

    document.getElementById("sum").textContent = sum;
    document.getElementById("primeNumbers").textContent = primeCount;
    document.getElementById("nonPrimeNumbers").textContent = nonPrimeCount;
    document.getElementById("percentage").textContent = percentage.toFixed(2);
}