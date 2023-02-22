function isPrime(number) {
    var isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    else if (number > 2) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
var arr = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
var sum = 0;
for (var number in arr) {
    if (isPrime(arr[number])) {
        sum += arr[number];
    }
}
console.log("tổng các số nguyên tố trong mảng trên là:" + sum);
