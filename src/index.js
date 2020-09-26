module.exports = function toReadable(num) {
    obj = {
        a: ["zero", "one" , "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
        b: ['eleven', 'twelve', 'thirteen', 'fourteen', "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        c: ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    }

    n = num;

    num = String(num);
    
    arr = num.split("");

    str = "";

    if (n<11){
        str = obj.a[n];
    } else if (n<20){
        str = str + obj.b[n-11];
    } else if (n < 100 && n %10 ===0){
        str = obj.c[(n/10) - 2];
    } else if (n<100){
      str = obj.c[arr[0]-2] + " "+ obj.a[arr[1]];
    } else if(n<1000 && n%100 === 0){
      str = obj.a[arr[0]]+ " "+ "hundred";
    } else if(n > 100 && n%100 <10){
        str = obj.a[arr[0]]+ " "+ "hundred" + " " + obj.a[arr[2]];
    } else if (n>100 && n%100 === 10 && n%100 !== 0){
        str = obj.a[arr[0]]+ " "+ "hundred" + " ten";
    } else if(n<1000 && n%10 === 0){
      str = obj.a[arr[0]]+ " "+ "hundred" + " " + obj.c[arr[1]-2];
    } else if (n%100 > 20){
      str = obj.a[arr[0]]+ " "+ "hundred" + " " + obj.c[arr[1]-2] + " " + obj.a[arr[2]];
    } else {
       str = obj.a[arr[0]]+ " "+ "hundred " + obj.b[arr[2]-1];
    }

    return str;

}