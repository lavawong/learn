
// export
const findRemainder = (m, n)=>{
    if (m < n) {
        [m, n] = [n,m];
    }
    let r = m % n;
    if (r === 0) {
        return n;
    } else {
        return findRemainder(n, r);
    }
}


console.log(findRemainder(5, 15));
console.log(findRemainder(7, 15));
console.log(findRemainder(15, 15));
