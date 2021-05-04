//Найти n-нное число Фибоначчи

process.stdin.on('data', (data) => {
     let n = parseInt(data.toString().split(' '));
     let arr = [];
     arr[0] = 0;
     arr[1] = 1;
     for(let i = 2; i <= n; i++){
        arr[i] = arr[i-1]+ arr[i-2];
     }
    console.log(arr[arr.length-1]);
});

//Найти последнюю цифру большого числа Фибоначчи 1 <= n <= 10^7

process.stdin.on('data', (data) => {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    let numb = parseInt(data.toString().split(' '));
    for(let i = 2; i <= numb; i++){
        arr[i] = (arr[i-1]+ arr[i-2])%10;
    }
    console.log(arr[arr.length-1]);
    return arr[arr.length-1];
});